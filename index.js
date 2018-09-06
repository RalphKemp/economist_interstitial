function ecoStart() {
  const tl = new TimelineLite();

  tl.to('#steel-logo', 0.5, { opacity: 1 })
    .to('#watch', 0.5, { opacity: 1 }, '-=0.3')
    .to('#cta', 1, { opacity: 1, delay: 1 });
}
