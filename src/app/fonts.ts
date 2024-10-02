import localFont from 'next/font/local';

const srcCodeMono = localFont({
  src: './fonts/SourceCodePro-VariableFont_wght.ttf',
  variable: '--font-source-code-pro',
  weight: '100 900',
});

export const fonts = {
  srcCodeMono,
};
