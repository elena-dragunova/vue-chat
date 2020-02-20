import Vue from 'vue';
import store from '@/store';

import SocketIo from 'socket.io-client';
import VueSocketIo from 'vue-socket.io';

export const Socket = SocketIo('http://localhost:3000');

Vue.use(new VueSocketIo({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}), Socket);
