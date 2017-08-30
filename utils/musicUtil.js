function processMusics(musics) {
  for (var i = 0, max = musics.length; i < max; i++) {
    var music = musics[i];
    this.processMusic(music);
  }
}

function processMusic(music) {
    music.url = music.song_id;
    music.src = music.pic_big;

    var author = music.author;
    var title = music.title;
    var album = music.album_title;
    var publishtime = music.publishtime;

    var text = "曲名：" + title + "\n专辑:"+ album + "\n作者:"+ author + "\n发布时间:" + publishtime;

    music.text = text;

}

module.exports = {
  processMusics: processMusics,
  processMusic: processMusic,
}