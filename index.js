let doc = document
let cont = doc.querySelector('.container')
let product_box = doc.querySelector('.product')
let plus = 0

let container = doc.createElement('div')
let title_box = doc.createElement('div')
let title = doc.createElement('h1')
let button_box = doc.createElement('div')
let button_5 = doc.createElement('button')
let button_all = doc.createElement('button')
let button_basket = doc.createElement('button')

title_box.classList.add('title_box')
button_box.classList.add('button_box')
title.classList.add('title')
button_basket.classList.add('basket_btn')

button_box.append(button_5, button_all)
title_box.append(title, button_box)
container.append(title_box, button_basket)
cont.append(container)

button_basket.onclick = () => {
    
}


reload(arr)



function reload(arr) {

    for (let item of arr) {
        let mainDiv = doc.createElement('div')
        let mainImg = doc.createElement('img')
        let middleDiv = document.createElement('div')
        let h1 = doc.createElement('h1')
        let p = doc.createElement('p')
        let btn = doc.createElement('button')

        let bottomDiv = doc.createElement('div')
        let bottomDivBox1 = doc.createElement('div')
        let bottomDivBox2 = doc.createElement('div')
        let bottomDivBox3 = doc.createElement('div')
        let box1p = doc.createElement('p')
        let box2p = doc.createElement('p')
        let box3p = doc.createElement('p')
        let box1img = doc.createElement('img')
        let box2img = doc.createElement('img')
        let box3img = doc.createElement('img')

        mainDiv.classList.add('mainDiv')
        mainImg.classList.add('mainImg')
        middleDiv.classList.add('middleDiv')
        h1.classList.add('h1')
        p.classList.add('p')
        bottomDiv.classList.add('bottomDiv')
        bottomDivBox1.classList.add('bottomDivBox')
        bottomDivBox2.classList.add('bottomDivBox')
        bottomDivBox3.classList.add('bottomDivBox')
        box1p.classList.add('boxP')
        box2p.classList.add('boxP')
        box3p.classList.add('boxP')
        btn.classList.add('btn')
        box1img.classList.add('boxImg')
        box2img.classList.add('boxImg')
        box3img.classList.add('boxImg')

        mainImg.setAttribute('src', item.image)
        box1img.setAttribute('src', "./icons/price.svg")
        box2img.setAttribute('src', "./icons/star.svg")
        box3img.setAttribute('src', "./icons/box.svg")

        h1.innerHTML = `${item.category} (${item.rating.count})`
        p.innerHTML = item.description.length > 100 ? item.description.slice(0,90) + " <b>...read</b>" : item.description
        box1p.innerHTML = item.price
        box2p.innerHTML = item.rating.rate
        box3p.innerHTML = item.rating.count
        btn.innerHTML = "В избранное"
        title.innerHTML = `В корзине: ${plus} товар(ов)`
        button_5.innerHTML = 'Показать 5 товаров'
        button_all.innerHTML = 'Показать все товары'
        
        cont.append(product_box)
        product_box.append(mainDiv)
        mainDiv.append(mainImg, middleDiv)
        middleDiv.append(h1, p, bottomDiv, btn)
        bottomDiv.append(bottomDivBox1, bottomDivBox2, bottomDivBox3)
        bottomDivBox1.append(box1img, box1p)
        bottomDivBox2.append(box2img, box2p)
        bottomDivBox3.append(box3img, box3p)
        
        function click() {
            plus += 1
            title.innerHTML = `В корзине: ${plus} товар(ов)`
        }

        btn.onclick = () => {
            click()
            btn.innerHTML = 'Добавлено'
            btn.style.background = 'blue'
            btn.style.color = 'white'
        }
    }
}


let hide = doc.querySelectorAll('.mainDiv')
let used = doc.querySelector('title')
let product_arr = []

button_5.onclick = () => {
    hide.forEach((el, idx) => {
        if(idx > 4) {
            el.classList.add('hide')
        }
    })
}

button_all.onclick = () => {
    for(item of hide) {
        item.classList.remove('hide')
    }
}

