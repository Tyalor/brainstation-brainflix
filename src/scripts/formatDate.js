const formatDate = src => new Date(src).toLocaleDateString();

const formatDateVerbose = src => {
    let formatTimestamp = new Intl.DateTimeFormat('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' }).format(src).replace(/,/g , '')
    return formatTimestamp
}

const formatDateRelative = src => {
    let seconds = Math.floor((new Date() - src) / 1000);
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}


export {formatDate, formatDateVerbose, formatDateRelative}