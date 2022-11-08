window.onload = () => {
    //1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
    // Дані виводяться в стилізований ліст,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється.
    // В пункті який добавляється повино бути данні які введено і час створення в форматі день, номер місяця, рік.
    let divContainer = document.createElement('div')
    divContainer.setAttribute('class', 'container')
    document.body.appendChild(divContainer)

    let divContent = document.createElement('div');
    divContent.setAttribute('class', 'contnet , col-6')
    divContainer.appendChild(divContent)

    let Tittle = document.createElement('h1')
    Tittle.setAttribute('class', 'Tittle')
    Tittle.innerHTML = 'To do:'
    divContent.appendChild(Tittle)

    let List = document.createElement('ul');
    List.setAttribute('id', 'DivList')
    divContent.appendChild(List)


    let TaskInput = document.createElement('div');
    TaskInput.setAttribute('class', 'TaskDiv , mt-5 , mb-1')
    divContent.appendChild(TaskInput)

    let TaskInputTittle = document.createElement('span')
    TaskInputTittle.setAttribute('class', 'TaskInputTittle , pe-5 , ms-3 , fw-bold')
    TaskInputTittle.innerHTML = 'Task'
    TaskInput.appendChild(TaskInputTittle)

    let TaskInputInput = document.createElement('input');
    TaskInputInput.setAttribute('class', 'TaskInputInput , col-10 , form-label , border-red, rounded')
    TaskInputInput.setAttribute('placeholder', 'What do you need to do?')
    TaskInput.appendChild(TaskInputInput)

    let ToDoBtnContainer = document.createElement('div');
    ToDoBtnContainer.setAttribute('class', 'ToDoBtnContainer , d-flex , justify-content-end')
    divContent.appendChild(ToDoBtnContainer)

    let ToDoBtn = document.createElement('button')
    ToDoBtn.setAttribute('class', 'ToDoBtn , me-3 , btn btn-primary ')
    ToDoBtn.innerHTML = 'Save Item'
    ToDoBtnContainer.appendChild(ToDoBtn)


    ToDoBtn.addEventListener("click", function () {
        let date = new Date()
        List.appendChild(document.createElement('li')).innerHTML = TaskInputInput.value + " " + date.getDate() + " " + (date.getMonth() + 1) + " " + date.getFullYear()

        if (document.getElementById('DivList').childElementCount > 5) {
            List.removeChild(List.firstElementChild);
        }
    })

    //2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення alt для зображення, стилізувати задовільно

    let images = [

        {
            imgPath:'img/1.jpg',
            alt:'png image1',
            href:'https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg'
        },
        {
            imgPath:'img/2.jpg',
            alt:'png image2',
            href:'https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-798.jpg?w=740&t=st=1667917378~exp=1667917978~hmac=774007127e18ff074f422f583c094afd506e07de4b34d67a0a4e407c933a3570'
        },
        {
            imgPath:'img/1.jpg',
            alt:'png image3',
            href:'https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg'
        }
    ]
    let newElement = document.createElement('div');
    let newDiv = new DocumentFragment();
    for (const value of images){
        let div = document.createElement('div');
       let img = document.createElement('img')

        img.setAttribute('href' , value.href)
        img.setAttribute('alt' , value.alt)
        img.setAttribute('src' , value.imgPath)
        div = document.createElement('div')
        div.innerHTML = `<a href="${value.href}"><img src="${value.imgPath}" alt="${value.alt}"></a>`;
        newDiv.appendChild(div)
        newElement.appendChild(newDiv)
    }
    document.body.appendChild(newElement)

    //3) Створити поле (без кораблів) для морського бою, літери, цифри і стилі для поля задати за допомогою js
    let letters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' ]
    let numbers = ['1' , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10"]



    let divContainer1 = document.createElement('div')
    divContainer1.setAttribute('class' , 'container d-flex justify-content-center')
    document.body.appendChild(divContainer1)

    let lettersContainer = document.createElement('div');
    lettersContainer.setAttribute('class' , 'lettersContainer')
    lettersContainer.setAttribute('style' , 'position:relative ; left:605px ; top:12px')
    divContainer1.appendChild(lettersContainer)

    let NumbersContainer = document.createElement('div');
    NumbersContainer.setAttribute('class' , 'NumbersContainer d-flex flex-column')
    NumbersContainer.setAttribute('style' , 'position:relative ; left:50px ; top:50px')
    divContainer1.appendChild(NumbersContainer)

    let divContainerVer = document.createElement('div')
    divContainerVer.setAttribute('class' , 'containerVer d-flex ')
    divContainer1.appendChild(divContainerVer)

    let divContainerHor = document.createElement('div')
    divContainerHor.setAttribute('class' , 'containerHor d-flex flex-column ')
    divContainerHor.setAttribute('style' , 'position:relative ; right:47%')
    divContainer1.appendChild(divContainerHor)

    let fragment = new DocumentFragment();

    for (i = 0; i < 12; i++){

        let verticalLine = document.createElement('div')
        verticalLine.setAttribute('class' , 'VerticalLine me-5')
        verticalLine.setAttribute('style', "background-color: black ; width: 3px ; height: 564px;")
        divContainerVer.appendChild(verticalLine)

        let HorizLine = document.createElement('div')
        HorizLine.setAttribute('class' , 'VerticalLine mb-5')
        HorizLine.setAttribute('style', "background-color: black ;  width: 560px ; height: 3px;")
        divContainerHor.appendChild(HorizLine)
    }

    letters.forEach((item) => {

        let spanLetters = document.createElement('span');
        spanLetters.setAttribute('class' , 'SpanNumbers')
        spanLetters.setAttribute("style" , "position:relative ; padding:20.1px; font-weight:bold; font-size:18px ")
        spanLetters.innerHTML = item;
        fragment.appendChild(spanLetters);


    })
    lettersContainer.appendChild(fragment);

    numbers.forEach((item) => {

        let spanNumbers = document.createElement('span');
        spanNumbers.setAttribute('class' , 'SpanNumbers')
        spanNumbers.setAttribute("style" , "position:relative ; padding:12.3px; font-weight:bold; font-size:18px ; text-align:center ")
        spanNumbers.innerHTML = item;
        fragment.appendChild(spanNumbers);


    })
    NumbersContainer.appendChild(fragment);
}
