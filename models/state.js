module.exports = function(sequelize, DataTypes) {
    var State = sequelize.define("State", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      abbr: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });

    State.associate = function(models) {
      State.hasOne(models.Note);
    }
    return State;
  };
  