class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTime: null, msg: 'now', tz: 'PST'
      }
    }
    // ...
    getApiUrl() {
      const {tz, msg} = this.state;
      const host = 'https://andthetimeis.com';
      return host + '/' + tz + '/' + msg + '.json';
    }
    // ...
  export default App;