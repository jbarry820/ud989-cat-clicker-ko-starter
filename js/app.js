var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https//www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ['Kitty', 'Fat Cat', 'El Gato']
	},
	{
		clickCount : 0,
	    name : 'Tiger',
	    imgSrc : 'img/4154543904_6e2428c421_z.jpg',
	    imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
		nicknames: ['Tigger', 'Fato Cato', 'El Gatos']
	},
	{
		clickCount : 0,
	    name : 'Scaredy',
	    imgSrc : 'img/22252709_010df3379e_z.jpg',
	    imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
		nicknames: ['Casper', 'Fat Cat', 'El Gato']
	},
    {
	    clickCount : 0,
	    name : 'Shadow',
	    imgSrc : 'img/1413379559_412a540d29_z.jpg',
	    imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
		nicknames: ['Shooby', 'Fat Cat', 'El Gato']
    },
	{
		clickCount : 0,
	    name : 'Sleepy',
	    imgSrc : 'img/9648464288_2516b35537_z.jpg',
	    imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
		nicknames: ['Zzzzz', 'Fat Cat', 'El Gato']
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

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

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() +5);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}
};

ko.applyBindings(new Viewmodel());