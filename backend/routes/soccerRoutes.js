import {
    addNewPlayer, 
    getPlayers, 
    getPlayerWithID,
    updatePlayer 
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    //GET endpoint
    .get(getPlayers)

    //POST endpoint
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
    //Get specific player
    .get(getPlayerWithID)

    //Update specific player
    .put(updatePlayer);
}

export default routes;