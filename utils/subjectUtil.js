function processSubjects(subjects) {
    for(var i = 0, max = subjects.length; i < max; i++) {
      var subject = subjects[i];
      this.processSubject(subject);
    }
  }
function   processSubject(subject) {
    //src 和text
    var src = subject.image;
    var title = subject.title;
    var author = subject.author;
    var pubdate = subject.pubdate;
    var price = subject.price;

    var text = "书名：" + title + "\n 作者：" + author + "\n出版时间：" + pubdate  + "\n 价格：" + price;

    subject.text = text;
    subject.src = src; 

}

module.exports = {
    processSubjects: processSubjects,
    processSubject: processSubject,
}