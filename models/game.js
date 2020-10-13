// require sequelize to create ids
const Sequelize = require("sequelize");

// Creating our Game model
module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    2: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    3: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    4: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    5: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    6: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    7: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    8: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    9: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    10: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    11: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    12: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    winner: {
      type: DataTypes.STRING,
      defaultValue: 0
    }
  })

  Game.associate = function(models) {
    Game.belongsTo(models.User, {
      foriegnKey: {
        allowNull: false
      }
    })
  }
  return Game;
}