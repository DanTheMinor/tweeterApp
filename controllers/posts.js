Twatter.PostsController = Ember.ArrayController.extend({
  // sortProperties: ['title'],
  //sortAscending: false,
  index: 3,
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    },
    addPost: function() {
      this.set('index', this.index + 1);
      this.addObject({
        id: this.index,
        title: 'newPost title',
        body: 'newPost body'
      })
    }
  }
});
