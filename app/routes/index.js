import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('answer');
  },
  actions: {
    save3(input) {
      var newQuestion = this.store.createRecord('question', input);
      newQuestion.save();
      this.transitionTo('index');
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
