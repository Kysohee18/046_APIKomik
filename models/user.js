module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user",{
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}