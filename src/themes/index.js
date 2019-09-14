import theme from 'styled-theming';

const primaryColor = theme('mode', {
  light: 'black',
  dark: 'rgb(31, 186, 214)',
});

const secondaryColor = theme('mode', {
  light: 'black',
  dark: 'rgb(15, 150, 104)',
});

const textColor = theme('mode', {
  light: 'black',
  dark: 'white',
});

export default { primaryColor, secondaryColor, textColor };
