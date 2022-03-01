const searchButton = () => {
    // Catch input feild and input value 
    const inputFeild = document.getElementById('search-input');
    const inputValue = inputFeild.value;
    inputFeild.value = '';

    // load API 
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => loadPhone(data.data))
}

// function for load Phones 
const loadPhone = (data) => {
    // console.log(data);
    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    data.forEach(element => {
        // console.log(element);
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div class="card my-3 shadow-lg">
            <img src="${element.image}" class="card-img-top p-4" alt="...">
            <div class="card-body">
            <h5 class="card-title">Name : ${element.phone_name}</h5>
            <p class="card-title my-3">Brand : ${element.brand}</p>
                <a href="#" onclick='details(${element.idDrink})' class="btn btn-primary mt-2">Details</a>
            </div>
        </div>`;
        mainDiv.appendChild(div);
    });

}