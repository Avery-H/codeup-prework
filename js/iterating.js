(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Avery','Angela','Diego','Ed'];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log('There are ' + names.length + ' people in my House!');
    // TODO: Create log statements that will print each of the names array elements individually.
    for (var i = 0; i < names.length; i++) {
    console.log('Welcome ' +names[i]);
}
names.forEach(function (element, index, array) {

    // element is the shape name
    // index is the iterator
    // array is the shapes array itself

    console.log('The priority in the house goes ' + (index + 1)+ ' is: ' + element);

});
})();
