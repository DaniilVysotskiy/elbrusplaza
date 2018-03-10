import vue from 'vue';

import navigation from 'components/navigation/navigation';
import home from 'components/home/home';
import divider from 'components/divider/divider';
import feature from 'components/feature/feature';
import pricing from 'components/pricing/pricing';
import slider from 'components/slider/slider';
import contact from 'components/contact/contact';
import pageFooter from 'components/pageFooter/page-footer';

import 'src/style.scss';

new vue({
  components: {
    navigation,
    home,
    divider,
    feature,
    pricing,
    slider,
    contact,
    pageFooter,
  },
}).$mount('#app');
