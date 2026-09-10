// Empty subtitle areas collapse without removing playback controls or stopping narration.
(function () {
  const caption = document.getElementById('voice-caption');
  const dock = document.getElementById('voice-dock');
  if (!caption || !dock) return;
  const blocks = ['voice-caption', 'story-caption', 'detail'].map(id => document.getElementById(id)).filter(Boolean);
  function updateCaptionLayout() {
    for (const block of blocks) {
      const empty = !block.textContent.replace(/[\s\u200b\ufeff]/g, '');
      block.dataset.empty = String(empty);
    }
    const empty = caption.dataset.empty === 'true';
    dock.classList.toggle('caption-empty', empty);
    document.body.classList.toggle('voice-caption-empty', empty && !dock.hidden);
    if (empty && !dock.hidden) document.body.style.setProperty('--voice-controls-height', Math.ceil(dock.getBoundingClientRect().height + 20) + 'px');
    if (typeof fit === 'function') fit();
  }
  const observer = new MutationObserver(updateCaptionLayout);
  for (const block of blocks) observer.observe(block, { childList: true, characterData: true, subtree: true });
  observer.observe(dock, { attributes: true, attributeFilter: ['hidden'] });
  const resize = typeof ResizeObserver === 'function' ? new ResizeObserver(updateCaptionLayout) : null;
  resize?.observe(dock);
  window.addEventListener('resize', updateCaptionLayout);
  updateCaptionLayout();
}());
