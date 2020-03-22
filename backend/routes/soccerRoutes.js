import { addNewPlayer, getPlayers } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    //Get endpoint
    .get(getPlayers)
    
    //POST endpoint
    .post(addNewPlayer);
}

export default routes;