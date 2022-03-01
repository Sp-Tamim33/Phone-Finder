const searchButton = () => {
    // Catch input feild and input value 
    const inputFeild = document.getElementById('search-input');
    const inputValue = inputFeild.value;
    inputFeild.value = '';

    // load API 
    let url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => loadPhone(data.data))

}

// function for load Phones in website
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
                <a href='#' onclick="details('${element.slug}')" class="btn btn-primary mt-2">Details</a>
            </div>
        </div>`;
        mainDiv.appendChild(div);
    });

}

// function for details button 
const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/` + id;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => loadDetails(data.data))
}

// function for load details in webiste
const loadDetails = (detail) => {
    console.log(detail);

    const detailDiv = document.getElementById('detail-display');
    detailDiv.textContent = ''
    // console.log(drink);
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card mx-auto shadow" style="width: 18rem;">
        <img class="card-img-top p-4" src="${detail.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Name :${detail.name}</h5>
            <p class="card-title">Brand : <strong>${detail.brand}</strong></p>
            <li>${detail.mainFeatures.releaseDate}</li>
                <div><strong>Features :</strong>
                    <li><u>Storage</u> : ${detail.mainFeatures.storage}</li>
                    <li><u>Display</u> : ${detail.mainFeatures.displaySize}</li>
                    <li><u>Chipset</u> :${detail.mainFeatures.chipSet}</li>
                    <li><u>Memory</u> : ${detail.mainFeatures.memory}</li>
                </div>
                <div class="mt-2"><strong>Sensors :</strong>
                    <li>${detail.mainFeatures.sensors[0]}</li>
                    <li>${detail.mainFeatures.sensors[1]}</li>
                    <li>${detail.mainFeatures.sensors[2]}</li>
                    <li>${detail.mainFeatures.sensors[3]}</li>
                </div>
                <div class="mt-2"><strong>Others :</strong>
                    <li><u>WALN</u> : ${detail.others.WALN}</li>
                    <li><u>Bluetooth</u> : ${detail.others.Bluetooth}</li>
                    <li><u>Gps</u> : ${detail.others.GPS}</li>
                    <li><u>NFC</u> : ${detail.others.NFC}</li>
                    <li><u>Radio</u> : ${detail.others.Radio}</li>
                    <li><u>USB</u> : ${detail.others.USB}</li>
                </div>
            </div>
        </div>
        `;

    detailDiv.appendChild(div);
}