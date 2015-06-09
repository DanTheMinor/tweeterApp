Twatter.PostsController = Ember.ArrayController.extend({
  // sortProperties: ['title'],
  //sortAscending: false,
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    }
  }
});
