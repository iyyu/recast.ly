var VideoList = (props) => (
  <div className="video-list">
    {props.entries.map(entry => 
      <VideoListEntry key = {entry.id.videoId} entry = {entry} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  entries: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


