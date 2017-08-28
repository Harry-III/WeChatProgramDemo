// pages/book/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesSrc:"",
    origin_title:"",
    author:"",
    author_intro:"",
    summary:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.showLoading({
      title: '正在加载中',
    })
    wx.request({
      url: options.url,
      header: {
        // 'content-type': 'application/json'
        'Content-Type': 'json'
      },
      success:function(response) {
        var book = response.data;
        that.setData({
          imagesSrc:book.images.large,
          origin_title:book.title,
          author:book.author,
          author_intro:"  " + book.author_intro,
          summary:"  " + book.summary
        })

        wx.hideLoading();
      },
      fail:function(response) {
        wx.hideLoading();
      }

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