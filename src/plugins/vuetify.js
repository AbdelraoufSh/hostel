import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary:'#BFCBA4',
                secondary:'#212529', 
            },
            dark:{
                
            }
        }
    },
    options: {
        customProperties: true
      },
      typography: {
        fontFamily: {
          // Set your body font here
          body: `'Jost', sans-serif`, // Body text font
          // Set your heading font here
          heading: `'Jost', sans-serif`,  // Heading font
        }
      }
});
