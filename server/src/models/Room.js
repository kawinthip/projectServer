module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        roomNumber: DataTypes.STRING,
        people: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        detail: DataTypes.TEXT,
        status: DataTypes.STRING
    })
    return Room
}