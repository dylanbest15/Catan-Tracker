// require sequelize to create ids
const Sequelize = require("sequelize");
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blue: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    brown: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    green: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    orange: {
      types: DataTypes.INTEGER,
      defaultValue: 0
    },
    red: {
      types: DataTypes.INTEGER,
      defaultValue: 0
    },
    white: {
      types: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};