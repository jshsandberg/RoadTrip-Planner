module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });

    Note.associate = function(models) {
      Note.belongsTo(models.State, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    return Note;
  };
  