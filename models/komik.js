const { DataTypes } = require("sequelize");  
module.exports = (sequelize, DataTypes) => {
    const komik =sequelize.define("komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            
        },
        description: {
            type: DataTypes.STRING,
        },
        author: {
            type:DataTypes.STRING,
        }
    });
    return komik;
};