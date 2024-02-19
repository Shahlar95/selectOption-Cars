const cards = document.querySelector('#cards')
const select = document.querySelector('select')




const data = [
    {
        name: "volvo",
        imgUrl: "https://images.unsplash.com/photo-1629896428945-349a9a86e6ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZvbHZvfGVufDB8fDB8fHww",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa velit totam consectetur quo, laborum eos magni debitis magnam esse ab quaerat expedita ipsum molestiae ducimus nam ex quos laboriosam!'

    },
    {
        name: "tesla",
        imgUrl: "https://w0.peakpx.com/wallpaper/21/381/HD-wallpaper-2020-tesla-roadster-front-car.jpg",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa velit totam consectetur quo, laborum eos magni debitis magnam esse ab quaerat expedita ipsum molestiae ducimus nam ex quos laboriosam!'

    },
    {
        name: "ferrari",
        imgUrl: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa velit totam consectetur quo, laborum eos magni debitis magnam esse ab quaerat expedita ipsum molestiae ducimus nam ex quos laboriosam!'

    },
    {
        name: "lamborjini",
        imgUrl: "https://i.etsystatic.com/39648789/r/il/3a77f9/5120434720/il_fullxfull.5120434720_n0ra.jpg",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa velit totam consectetur quo, laborum eos magni debitis magnam esse ab quaerat expedita ipsum molestiae ducimus nam ex quos laboriosam!'

    },
]

function cardsUi() {
    let wrtier = ''
    data.forEach(item => {

        wrtier += `

        <div data-type =${item.name} class="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="inner">
            <div class="img">
                <img src=${item.imgUrl} alt="">
            </div>
            <div class="content">
                    <p>${item.content}</p>
            </div>
        </div>
        </div>
        
        `
    })
    cards.innerHTML = wrtier
}

cardsUi()


select.addEventListener('change', function () {
    const x = document.querySelector('#cars').value
    const dataType = document.querySelectorAll('.col')

    for (let i = 0; i < dataType.length; i++) {

        if (x == dataType[i].getAttribute('data-type') || x == 'all') {

            dataType[i].style.display = 'block'
        }
        else {

            dataType[i].style.display = 'none'

        }
    }
})