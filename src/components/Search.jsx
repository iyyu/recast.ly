class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  onButtonClick() {
    this.setState({clicked: !this.state.clicked});
    this.search($('.form-control').val());
  } 
  search(str) {
    //str = search form input
    let ajaxInput = {'q': str, 'maxResults': 5, 'key': window.YOUTUBE_API_KEY, 'part': 'snippet' };
//console.log(ajaxInput)
    $.ajax({
  // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: ajaxInput,
      dataType: 'jsonp',
      success: function (data) {
        window.exampleVideoData = [];
        data.items.forEach(function(item) {
          window.exampleVideoData.push(item);
        });
        ReactDOM.render(<App/>, document.getElementById('app'));
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('react: Failed to send message', data);
      }
    });
  } 
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={this.onButtonClick.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

