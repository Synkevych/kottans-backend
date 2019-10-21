function getShortMessages(messages) {
	let filtered = messages.filter(m => m.message.length < 50);
	return filtered.map(msg => msg.message);
}

module.exports = getShortMessages;

/* official solution to compare 

module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}	
*/
