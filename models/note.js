module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    return Note;
  };
  