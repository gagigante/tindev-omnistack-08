import App from './app';

App.listen(process.env.APP_PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('✅ Server is running ');
});
