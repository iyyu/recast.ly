var App = () => (
  <div>
    <nav className="navbar">
    <Search />
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer entry={window.exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList entries={window.exampleVideoData} />
      </div>
    </div>
  </div>
  
);

ReactDOM.render(<App />, document.getElementById('app'));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
