var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" searchStr={props.searchStr} />
    <button className="btn hidden-sm-down" onClick={() => {
      // props.onSearchButtonClick({ key: window.YOUTUBE_API_KEY, query: props.searchStr, max: 5 }); 
      console.log(props.searchStr);
      
    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

