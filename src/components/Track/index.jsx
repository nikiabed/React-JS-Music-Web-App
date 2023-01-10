function TrackItem({ imageName, handlePlay, track, title, singer }) {
  return (
    <div className="track track__container" onClick={() => handlePlay(track)}>
      <figure className="track__fig__image">
        <img
          src={require(`../../assest/img/${imageName}.jpg`)}
          className="track__image"
        />
      </figure>
      <figcaption className="track__title">{title}</figcaption>
      <figcaption className="track__singer">{singer}</figcaption>
    </div>
  );
}
export default function TrackList({ handleSelect }) {
  return (
    <div className="track__list">
      <TrackItem
        imageName={1}
        handlePlay={handleSelect}
        singer="Taylor Swift"
        title="Bad Blood"
        track="bad"
      />
      <TrackItem
        imageName={2}
        handlePlay={handleSelect}
        singer="Adel"
        title="Hello"
        track="hello"
      />
      <TrackItem
        imageName={3}
        handlePlay={handleSelect}
        singer="Coldplay"
        title="Up&Up"
        track="up"
      />

      <TrackItem
        imageName={4}
        handlePlay={handleSelect}
        singer="Selena Gomez"
        title="Lose You To Love Me"
        track="lose"
      />
      <TrackItem
        imageName={5}
        handlePlay={handleSelect}
        singer="Pink"
        title="So What"
        track="so"
      />
      <TrackItem
        imageName={6}
        handlePlay={handleSelect}
        singer="Katy Perry"
        title="Roar"
        track="roar"
      />
      <TrackItem
        imageName={7}
        handlePlay={handleSelect}
        singer="Rema"
        title="Calm Down"
        track="stay"
      />
    </div>
  );
}
