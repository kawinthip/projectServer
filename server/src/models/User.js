module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        tell: DataTypes.STRING,
        status: DataTypes.STRING
    })
    return User
}