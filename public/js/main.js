const $container = document.querySelector('.container')
const $sliderProtein = document.querySelector('.slider-protein')
console.log($container)


const getDataImgProtein = async () => {
    const response = await fetch('http://localhost:3000')
    const dataFromServer = await response.json()
    try {
        console.log(dataFromServer)
        function selectedProteinImg(images, i) {
            setInterval(() => {
                const selectedImg = document.createElement('img')
                selectedImg.classList.add('slider-protein-item')
                selectedImg.src = `../public/img/protein/${images[i]}`

                $sliderProtein.innerText = ''
                $sliderProtein.appendChild(selectedImg)
                i++
                i = i % images.length
            }, 4000)
        }

        selectedProteinImg(dataFromServer, 0)

    } catch {
        $container.innerText = 'Протеина нет, не качьнешься 😀'
    }
}

getDataImgProtein()