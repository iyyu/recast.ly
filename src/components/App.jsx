class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sourceVid: window.exampleVideoData[0]
    };
  }
  
  onVideoEntryClick(video) {
    this.setState({sourceVid: video});
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <Search />
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={window.exampleVideoData[0]} />
          </div>
          <div className="col-md-5">
            <VideoList onVideoEntryClick={this.onVideoEntryClick} videos={window.exampleVideoData} />
          </div>
        </div>
      </div>
    );
  }
  
}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
