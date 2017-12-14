class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sourceVid: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      searchStr: 'cats'
    };
    
    this.onVideoEntryClick = this.onVideoEntryClick.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
  }
  
  onVideoEntryClick(arg) {
    this.setState({sourceVid: arg});
  }
  
  onSearchButtonClick(options) {
    this.setState({videos: window.searchYouTube(options, callback)});
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <Search searchStr={this.state.searchStr} onSearchButtonClick={this.onSearchButtonClick} />
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.sourceVid} />
          </div>
          <div className="col-md-5">
            <VideoList onVideoEntryClick={this.onVideoEntryClick} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
  
}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
