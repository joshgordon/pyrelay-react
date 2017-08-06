import { setStatus, setState, getState } from '../actions'
import mqtt from 'mqtt'
import {GET_STATE, SET_STATE, CONNECT, DISCONNECT} from '../constants';

const socketMiddleware = (function(){
  let client = null;
  let foo = "bar";
  const onOpen = (client, store) => evt => {
    //Send a handshake, or authenticate with remote end

    //Tell the store we're connected
    store.dispatch(setStatus("CONNECTED"));
    store.dispatch(getState(0));
    store.dispatch(getState(1));
    store.dispatch(getState(2));
    store.dispatch(getState(3));
    store.dispatch(getState(4));
    store.dispatch(getState(5));
    store.dispatch(getState(6));
    store.dispatch(getState(7));
  }

  const onClose = (client, store) => evt => {
    //Tell the store we've disconnected
    store.dispatch(setStatus("DISCONNECTED"));
  }

  const onMessage = store => (topic, msg, packet) => {
    topic = topic.split('/')
    msg = new TextDecoder('utf-8').decode(msg)
    if (topic[3] == "state") {
      msg = msg == "True" ? 1 : 0
      store.dispatch(setState(topic[4], msg, true))
    } else {
      store.dispatch(setState(topic[3], msg, true))
    }
    console.log(topic, msg, packet)
  }

  return store => next => action => {
    console.log(action)
    switch(action.type) {

      //The user wants us to connect
      case CONNECT:


        console.log("Connecting to ws server")

        //Start a new connection to the server
        if(client!= null) {
          client.end();
        }
        //Send an action that shows a "connecting..." status for now
        var client  = mqtt.connect('ws://mqtt.bluesmoke.network:9001/mqtt')
        store.dispatch(setStatus('connecting'));

        foo=client


        client.on('connect', onOpen(client, store))
        client.on('close', onClose(client, store))
        client.on('message', onMessage(store))

        client.subscribe('gordon/smarthouse/relaybox/#')

        break;

      //The user wants us to disconnect
      case DISCONNECT:
        if(client!= null) {
          client.end()
        }
        client = null;

        //Set our state to disconnected
        store.dispatch(setStatus("DISCONNECTED"));
        break;

      //Send the 'SEND_MESSAGE' action down the websocket to the server
      case SET_STATE:
        if (action.remote) {
          next(action)
        } else {
          foo.publish('gordon/smarthouse/relaybox/' + action.index, "" + action.value)


          next(action)
        }
        break;
      case GET_STATE:
        foo.publish('gordon/smarthouse/relaybox/' + action.index, "?")
        break;

      //This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action);
    }
  }

})();

export default socketMiddleware

