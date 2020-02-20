import Vue from 'vue';
import Vuex from 'vuex';

import main from '@/app/main/store/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
  },
});
