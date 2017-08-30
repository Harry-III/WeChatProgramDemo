// pages/music/music.js
var musicUtil = require("../../utils/musicUtil.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      start:20,
      hiddenEnd:true,
      musics:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMusics(options);
  },

  loadMusics:function(options) {
    var that = this;
    wx.showLoading({
      title: '正在加载中',
    })
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        "from": "qianqian",
        "version": "2.1.0",
        "method": "baidu.ting.plaza.getNewSongs",
        "format": "json",
        "limit": that.data.start,
      },
      header: {
        "Content-Type": "json",
      },
      success: function (res) {
        var songList = res.data.song_list;
        musicUtil.processMusics(songList);
        that.setData({
          musics:that.data.musics.concat(songList),
        })

        // if(songList.length < 10 || that.data.start > 15) {
        //   that.setData({
        //     hiddenEnd:false,
        //   })
        // } else {
        //   that.setData({
        //     start:that.data.start + 20,
        //   })
        // }
      },
      fail: function (res) { },
      complete: function (res) {
        wx.hideLoading();
      },
    })
  },

  bookDetail: function(e) {
    wx.navigateTo({
      url: "./musicDetail?song_id=" + e.currentTarget.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
    this.setData({
      musics:[],
    })
    this.loadMusics();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      // if(!this.data.hiddenEnd) {
      //   return;
      // }
      // this.loadMusics();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})