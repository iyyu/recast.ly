class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sourceVid: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    
    this.onVideoEntryClick = this.onVideoEntryClick.bind(this);
  }
  
  onVideoEntryClick(arg) {
    console.log(arg);
    console.log('passed function down to video entry to', this);
    this.setState({sourceVid: arg});
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <Search />
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
