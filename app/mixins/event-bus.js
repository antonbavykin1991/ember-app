import Ember from 'ember';

export default Ember.Mixin.create({
	_initialize: Ember.on('init', function () {
    var listen = this.get('listen');
    
  	for(var key in listen) {
      (function () {
    		var eventName = key,
            eventValue = listen[key];

        this.eventbus.subscribe(eventName, function () {
      		this.send.apply(this, [eventValue].concat(Array.prototype.slice.call(arguments)));
    		}.bind(this));
        
      }).call(this);	
  	}
  })
});
