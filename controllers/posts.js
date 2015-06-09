Twatter.PostsController = Ember.ArrayController.extend({
  // sortProperties: ['title'],
  //sortAscending: false,
  actions: {
    addPost: function() {
      var newPost = {id: (posts.length + 1), title: this.get('new-post'), body: 'body test'};
      posts.addObject(newPost);
      //debugger
    },
    sortByTitle: function() {
      //debugger
      this.set('sortProperties', ['title']);
    }
  }
});
