document.addEventListener('keydown', (e) => {
    // F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      window.location.href = "skid.html";
    }
    // Ctrl+Shift+I for Windows/Linux
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
      e.preventDefault();
      window.location.href = "skid.html";
    }
    // Cmd+Opt+I for Mac
    if (e.metaKey && e.altKey && (e.key === 'I' || e.keyCode === 73)) {
      e.preventDefault();
      window.location.href = "skid.html";
    }
  });
