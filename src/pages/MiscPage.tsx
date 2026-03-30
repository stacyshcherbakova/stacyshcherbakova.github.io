export function MiscPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Misc</p>
      <h2>Elsewhere</h2>
      <p>
        This page can hold the more human stuff: music, photos, favorite things, and embeds like Spotify or Instagram if you want them.
      </p>
      <div className="stack-list">
        <div className="item-card"><strong>Music</strong><p>Add a Spotify embed or a favorite playlist.</p></div>
        <div className="item-card"><strong>Photography</strong><p>Add Instagram links, selected shots, or a small gallery.</p></div>
      </div>
    </section>
  );
}
