function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function() {
    this.text = 'New Message';
};
 Post.prototype = AttachedPost.prototype;
  function AttachedPost(author, text, date, hightlighted) {
      Post.call(this, author, text, date);
      this.hightlighted = hightlighted;
  }
  AttachedPost.prototype.makeTextHighlighted = () => {
      this.hightlighted = true;
  }

  const page = new AttachedPost('Viktor', "Message", 2022, false)

  console.log(page.makeTextHighlighted())