import Vue from 'vue'
import {
  ajax,
  login,
} from './utils/api';
import size from './utils/size';
import 'taro-ui-vue/dist/style/index.scss';
import './app.css';

Vue.prototype.ajax = ajax;
Vue.prototype.size = size;
Vue.prototype.login = login;

const App = {
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
