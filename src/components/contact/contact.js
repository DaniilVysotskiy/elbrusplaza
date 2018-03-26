import Vue from 'vue';
import template from './contact.html';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default Vue.extend({
  template,
  components: { yandexMap, ymapMarker }
});
