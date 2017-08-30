
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // src:"",
    // isPlaying:"/asset/pause.png",
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src : 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wx.showLoading({
    //   title: '',
    // })
    // wx.request({
    //   url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&songid='+options.song_id+'&method=baidu.ting.song.getInfos&format=json&ts=1408284347323&e=JoN56kTXnnbEpd9MVczkYJCSx%2FE1mkLx%2BPMIkTcOEu4%3D&nw=2&ucf=1&res=1',
    //   header: {
    //     "Content-Type":"json"
    //   },
    //   success: function(res) {
    //     var song = res.data;
    //     that.setData({
    //       src: song.songinfo.pic_premium,
    //     })
    //     var playSrc = song.songurl.url[0].show_link;
    //     wx.playVoice({
    //       filePath: playSrc,
    //       success: function(res) {
    //         that.setData({
    //           isPlaying:"/asset/playing.png",
    //         })
    //       },
    //       fail: function(res) {
    //         that.setData({
    //           isPlaying:"/asset/pause.png",
    //         })
    //       },
    //     })

    //   },
    //   fail: function(res) {},
    //   complete: function(res) {
    //     wx.hideLoading()
    //   }, 
    // })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext("onlyOne");
  },
  audioPlay: function() {
    this.audioCtx.play();
  },

  audioPause: function() {
    this.audioCtx.pause();
  },
  audio14:function() {
    this.audioCtx.seek(14);
  },
  audioStart:function() {
    this.audioCtx.seek(0);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})