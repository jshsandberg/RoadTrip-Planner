module.exports = function(sequelize, DataTypes) {
  var Notes = sequelize.define("Notes", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1,200]
    }

  });

  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Notes;
};
