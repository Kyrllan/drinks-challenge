import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const defaultTheme = {
  dark: true,
  colors: {
    white: '#FFFFFF',
    gray100: '#e1e1e6',  
    gray300: '#a8a8b3',
    gray800: '#29292e',  
    gray850: '#1f2729',  
    gray900: '#121214', 
    gray950: '#0e0e10', 
    cyan500: '#61dafb',
    amber500: '#FFC107',
    violet500: '#6963FF',
    error: '#EB000C',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});