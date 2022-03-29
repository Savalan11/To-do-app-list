function newItem() {

    //checks whether the value of input is empty ot not
    if ($('#input').val() === '') {
        alert('Please type something');
        return;
    }

    //receives the element and the value of the input
    let input = $('#input').val();
    let element = $('<li></li>');

    //Add the element to the list
    element.append(input);

    //Adds the item to the list as a list element
    $('#list').append(element);

    //Resets value of the input form
    $('#input').val('');

    //Making double click toggle the strike class
    element.on("dblclick", crossOut);

    //Creates delete button
    let deleteButton = $('<crossoutbutton></crossoutbutton>');
    deleteButton.append(document.createTextNode('Remove'));

    //Appends the button to the item
    element.append(deleteButton);

    //Adds the listener for the click event
    deleteButton.on("click", deleteListItem);

    function deleteListItem() {
        element.addClass('delete');
    }

    function crossOut() {
        //Assigning the toggle class strike
        element.toggleClass('strike');
    }

    //Makes the list sortable
    $('#list').sortable();
}
