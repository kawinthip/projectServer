const UserController = require('./controllers/UserController')
const RoomController = require('./controllers/RoomController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        UserController.index
    )

    // blog route
    // create blog
    app.post('/room',
        RoomController.create
    )
    // edit blog, suspend, active
    app.put('/room/:roomId',
        RoomController.put
    )
    // delete blog
    app.delete('/room/:roomId',
        RoomController.remove
    )
    // get blog by id
    app.get('/room/:roomId',
        RoomController.show
    )
    // get all blog
    app.get('/rooms',
    RoomController.index
    )
    
}