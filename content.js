const observer = new MutationObserver(() => {
  const btn = document.querySelector('button[data-qa="thread_mention_warning__send_button"]');
  if (btn) {
    btn.click();
    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
