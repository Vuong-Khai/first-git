function AssignAction( object ) {
    object.on('click', () => {
        window.location.href = 'https://www.pixiv.net/en/';
    });
}

function addPara( target, content = '' ) {
	var newPara = $('<p></p>').text(content);
	target.append(newPara);
}

function createItem( imgSrc ='', desContent = '', itemPrice = 0) {
    var newItem = $('<div></div>').addClass("item");

    //Adding the image
    var img = $('<img></img>').attr("src", imgSrc + ".png");
    newItem.append( img );

    //Adding the description
    var description = $('<p></p>').html( desContent );
    newItem.append( description );

    //Adding the price
    var price = $('<p></p>').html( `${itemPrice}G` );
    newItem.append( price );

    return newItem;
}

    $(document).ready( function() {
        var picture = $('.picture');
        // AssignAction( picture );

        picture.on('click', function() {
            addPara(picture, 'Buy it!');
            alert( $(this).html() );
        });

        var foods = ['chicken', 'soup', 'lobster', 'toast', 'salad', 'steak'];
        var prices = [150, 75, 200, 50, 75, 150];

        var list = $('#list .container');
        for (let i = 0; i < foods.length; ++i) {
            list.append( createItem(`food_${i+1}`, foods[i], prices[i]) );
        }
    });