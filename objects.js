var playlist = new Object({'eminiem': 'Help!'})

function updatePlaylist(playlist,name,title){
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
