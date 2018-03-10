import Vue from 'vue';
import template from './slider.html';
import VueTinySlider from 'vue-tiny-slider';

export default Vue.extend({
  template,
  components: {
    'tiny-slider': VueTinySlider
  }
});
