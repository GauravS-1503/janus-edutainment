export default function BackgroundVideo() {
  return (
    <div className="bgWrap" aria-hidden="true">
      <video className="bgVideo" autoPlay muted loop playsInline preload="metadata">
        <source
          src={`${import.meta.env.BASE_URL}bg/dna.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="bgOverlay" />
    </div>
  );
}
 