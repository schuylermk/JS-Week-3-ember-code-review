import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var input = {
        author: this.get('author'),
        question: this.get('question'),

      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', input);
    }
  }
});
