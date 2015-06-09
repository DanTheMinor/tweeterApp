Twatter.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', parseInt(params.post_id));
  }
});
