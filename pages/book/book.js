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
    books:[],
    hiddenEnd:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.loadBooks();
  },

  loadBooks:function() {
    wx.showLoading({
      title: '正在加载数据',
    })
    var that = this;
    wx.request({
      url: "https://api.douban.com/v2/book/search?tag=文学&start=" + that.data.start + "&count=10",
      header: {
        'Content-Type': 'json'
      },
      method: 'GET',
      success: function (res) {
        var books = res.data.books;
        console.log(books);
        subjectUtil.processSubjects(books);
        that.setData({
          books: that.data.books.concat(books)
        })


        if (res.data.count < 10 || that.data.start > 15) {
          that.setData({
            hiddenEnd: false
          })
        } else {
          that.setData({
            start: that.data.start + 10
          })
        }

        wx.hideLoading();
      },
      fail: function (res) {
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
      start:0,
      books:[],
    }) 
    this.loadBooks();
    wx.stopPullDownRefresh(); //停止下拉刷新
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(!this.data.hiddenEnd) {
      return;
    }
    this.loadBooks();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '我爱西红柿',
      path: '/page/index/index',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '转发失败',
        })
      }
    }
  }
})