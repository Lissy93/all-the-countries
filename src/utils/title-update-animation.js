const fancyUpdatingTitle = (flags) => {
  const numEmojis = 5; // The number of flags to show in title
  const timeInterval = 450; // Refresh time in ms
  const titleText = 'World Countries'; // Text to show alongside flags
  let titleFlags = '';
  let counter = 0;
  setInterval(() => {
    titleFlags = '';
    counter = flags.length <= counter + numEmojis + 1? 0 : counter + 1;
    for (let i = numEmojis; i > 0; i--) titleFlags += flags[counter + i];
    document.title = titleText + ' ' + titleFlags;
  }, timeInterval);
}

module.exports = fancyUpdatingTitle;