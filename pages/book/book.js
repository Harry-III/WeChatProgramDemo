// pages/book/book.js
var app = getApp();
var subjectUtil = require("../../utils/subjectUtil.js");

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    images:[{
      "url":"/asset/artist.jpg",
      "name":"齐白石"
    },{
      "url":"/asset/man.jpg",
      "name":"周树人"
    },{
      "url":"/asset/funny.jpg",
      "name":"钱钟书"
    }],
    start:0,
    books:[]

  //   books:[{
  //     "src":"/asset/man.jpg",
  //     "text":"这是一个i额"
  //   },{
  //       "src": "/asset/funny.jpg",
  //       "text": "这是一个r额"
  //   }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
        title: '正在加载数据',
      })
      var that = this;
      wx.request({
        url: "https://api.douban.com/v2/book/search?tag=文学&start="+ that.data.start+"&count=10",
        header: {
          'Content-Type': 'json'
        },
        method: 'GET',
        success: function (res) {
          var books = res.data.books;
          console.log(books);
          subjectUtil.processSubjects(books);
          that.setData({
            books:that.data.books.concat(books)
          })
          that.setData({
            start:that.data.start+10
          })

          wx.hideLoading();
        },
        fail:function(res) {
          wx.hideLoading();
        }
      })
  },

  showInfo: function(name) {
    wx.showToast({
      title: name.currentTarget.dataset.name,
      image: '/asset/cow.png'
    })
  },

  bookDetail:function(res) {
    app.bookDetail(res);
    // wx.navigateTo({
    //   url: "../pages/index/index?url="+ res.currentTarget.url,
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
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