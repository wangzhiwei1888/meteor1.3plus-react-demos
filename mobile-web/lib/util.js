
export const Color = {
  almostWhite: '#fbfdfb',
  grayWhite: '#f5f5fa',
  gallery: '#eee',
  middleGray: '#bfbfbf',
  primaryButton: '#2181c6',
  primaryText: '#015DA0',
  menuBgGray: '#353644',
  darkSpaceGray: '#323238',

  primary: '#810707'
}

const isMobileDevice = () => /(iphone|ipod|ipad|android)/gi.test(navigator.userAgent);

export default {
  isMobileDevice
}
