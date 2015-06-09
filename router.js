Twatter.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('recent-comments');
  this.resource('post', {path: 'posts/:post_id'})
});
