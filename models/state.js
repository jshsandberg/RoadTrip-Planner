module.exports = function(sequelize, DataTypes) {
    var State = sequelize.define("State", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      abbr: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    return State;
  };
  