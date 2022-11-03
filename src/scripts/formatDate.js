const formatDate = src => new Date(src).toLocaleDateString();

const formatDateVerbose = src => {
    let formatTimestamp = new Intl.DateTimeFormat('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' }).format(src).replace(/,/g , '')
    return formatTimestamp
}

// Make relative date function https://dberri.com/relative-dates-in-native-javascript/

export {formatDate, formatDateVerbose}