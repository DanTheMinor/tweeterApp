Twatter.NewPostsController = Ember.ObjectController.extend({
  index: 3,
  actions: {
    save: function() {
      debugger
      this.set('index', this.index + 1);
      this.addObject({
        id: this.index,
        title: 'newPost title',
        body: 'newPost body'
      })
    }
  }
})
