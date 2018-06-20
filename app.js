// Book Construtor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}



//UI Constrictor
function UI() {

}

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`;
    list.appendChild(row);
    //console.log(row);
}

//show alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    //add class
    div.className = 'alert ${className}';
    //add text 
    div.appendChild(document.createTextNode(message));

    //get parant 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
//insert alert
    container.insertBefore(div,form);

    //timeout
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}

//clear Fielsd 
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    //Get Form Values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
    const book = new Book(title, author, isbn);
    // console.log(book);
    // instantitate UI object
    const ui = new UI();

    //validate 
    if (title === '' || author === '' || isbn === '') {
        //Error
        ui.showAlert('Plese Fill fields','error');
    } else {
        //console.log(ui);
        //add book to list
        ui.addBookToList(book);

        //Show Success
        ui.showAlert('Book Added!', 'success');
         
        //clear Fields 
        ui.clearFields() ;
    }

    e.preventDefault();
});