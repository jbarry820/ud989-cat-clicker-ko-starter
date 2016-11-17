var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https//www.flickr.com/photos/bigtallguy/434164568');
	this.nicknames = ko.observableArray(['Kitty', 'Fat Cat', 'El Gato']);

    this.levels = ko.computed(function() {
        if (this.clickCount() < 20) {
            return "Infant";
        } else if (this.clickCount() < 50) {
            return "Teen";
        } else {
            return "Adult";
        }
    }, this);
}

var Viewmodel = function() {
	var self = this;

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() +5);
	};
}

ko.applyBindings(new Viewmodel());