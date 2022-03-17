document.getElementById("knjigicaMalaa").addEventListener("click", () => {
    document.getElementById("popisDodanih").classList.toggle("active");
});

let knjigaBtns = document.querySelectorAll(".btns button");
for (let i = 0; i < knjigaBtns.length; i++) {
    let button = knjigaBtns[i];
    button.addEventListener("click", checkAndCreate);
}

document.getElementById("popisDodanihBtn").addEventListener("click", () => {
    location.href = "./HTML/forma.html";
});

function CreateCard(bookName, bookAuthor, bookPrice) {
    const sideMenuBook = document.createElement("article");
    sideMenuBook.classList.add("sideItems");
    sideMenuBook.innerHTML =
        `<div>
    <h3 class="imeKnjigeS">${bookName}</h3>
    <h4>${bookAuthor}</h4>
</div>
<div>
    <small>Cijena:&nbsp;<em class="price">${bookPrice} </em>.00 kn</small>
    
    <small>Količina:&nbsp;<em class="amount">1</em></small>
    
</div>`;


    document.getElementById("sideItems").appendChild(sideMenuBook);
}

function checkAndCreate(event) {
    let flag = 0;
    const currBtn = event.target;
    const book = currBtn.parentNode.parentElement;
    const bookName = book.querySelector(".imeKnj").innerText;


    const bookAuthor = book.querySelector(".imeA").innerHTML;
    let bookPrice = book.querySelector(".cijenaKnj").innerHTML;

    bookPrice = bookPrice.substring(0, bookPrice.length - 3);
    console.log(bookPrice);
    let allBooks = document.querySelectorAll(".sideItems");

    if (allBooks.length == 0) {
        flag = 1;
        CreateCard(bookName, bookAuthor, bookPrice);
    }
    for (let i = 0; i < allBooks.length; i++) {
        let imeK = allBooks[i].querySelector(".imeKnjigeS").innerHTML;
        if (imeK == bookName) {
            flag = 1;
            let amount = +allBooks[i].querySelector(".amount").innerHTML;
            allBooks[i].querySelector(".amount").innerHTML = amount + 1;
        }
    }

    if (flag == 0) {
        CreateCard(bookName, bookAuthor, bookPrice);
    }
    // izracunaj ukupnu cijenu
    CalculatePrice();
}

function CalculatePrice() {
    let all_books = document.querySelectorAll(".sideItems");
    document.getElementById("cijena").innerHTML = 0;
    for (let index = 0; index < all_books.length; index++) {
        let price = +all_books[index].querySelector(".price").innerHTML;
        let amount = +all_books[index].querySelector(".amount").innerHTML;

        let ukupno = +document.getElementById("cijena").innerHTML;
        console.log(ukupno);
        document.getElementById("cijena").innerHTML = ukupno + (price * amount);
    }
}