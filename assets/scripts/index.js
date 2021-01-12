document.getElementById("lubba").addEventListener("click", function() {
    this.childNodes[2].play();
});
const buttonComix = document.getElementById('comix');
const body = document.querySelector("body");
let count = 0;
const Overlay = createElement({
    tagName: 'div',
    attributes:{
        style:"position:absolute;"+ "top:0" + ";" + "left:0" + ";" +"width:100%;"  + "height:1000%;" + "background-color:black;" +"z-index:10;" + "opacity:0.7;"
    }
});
 function createElement({ tagName, className, attributes = {} }) {
    const element = document.createElement(tagName);
    if (className) {
        const classNames = className.split(' ').filter(Boolean);
        element.classList.add(...classNames);
    }
    Object.keys(attributes).forEach((key) => element.setAttribute(key, attributes[key]));
    return element;
}

buttonComix.addEventListener('click',() =>{
    body.append(Overlay);
    if(count === 0) {
        const startComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[1].png",
                style: "position:fixed;" + "top:30%;" + "left:50%;" + "z-index:11;" + "width:50%;"
            }
        });
        const secondComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[2].png",
                style: "position:fixed;" + "top:30%;" + "left:0%;" + "z-index:11;"+ "width:50%;"
            }
        });
        const thirdComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[3].png",
                style: "position:fixed;" + "top:30%;" + "left:50%;" + "z-index:11;"+ "width:50%;"
            }
        });
        const FifthComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[4].png",
                style: "position:fixed;" + "top:30%;" + "left:0%;" + "z-index:11;"+ "width:50%;"
            }
        });

        body.append(startComic);
        setTimeout(() => {
            startComic.remove();
            body.append(secondComic);
        }, 4000);
        setTimeout(() => {
            secondComic.remove();
            body.append(thirdComic);
        }, 8000)
        setTimeout(() => {
            thirdComic.remove();
            body.append(FifthComic);
        }, 13000)
        setTimeout(() => {
            FifthComic.remove();
            Overlay.remove();
        }, 17000)
    }
    if(count === 1){
        const startComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[5].png",
                style: "position:fixed;" + "top:30%;" + "left:0%;" + "z-index:11;" + "width:50%;"
            }
        });
        const secondComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[6].png",
                style: "position:fixed;" + "top:30%;" + "left:50%;" + "z-index:11;" + "width:50%;"
            }
        });
        body.append(startComic);
        setTimeout(() => {
            startComic.remove();
            body.append(secondComic);
        }, 4000);
        setTimeout(() => {
            secondComic.remove();
            Overlay.remove();
        }, 8000)
    }
    if(count === 2){
        const startComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[7].png",
                style: "position:fixed;" + "top:30%;" + "left:35%;" + "z-index:11;"+"width:30%;"
            }
        });
        const secondComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[8].png",
                style: "position:fixed;" + "top:30%;" + "left:50%;" + "z-index:11;" + "width:50%;"
            }
        });
        const thirdComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[9].png",
                style: "position:fixed;" + "top:30%;" + "left:0%;" + "z-index:11;" + "width:50%;"
            }
        });
        const FifthComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[10].png",
                style: "position:fixed;" + "top:30%;" + "left:50%;" + "z-index:11;" + "width:50%;"
            }
        });

        body.append(startComic);
        setTimeout(() => {
            startComic.remove();
            body.append(secondComic);
        }, 2000);
        setTimeout(() => {
            secondComic.remove();
            body.append(thirdComic);
        }, 5000)
        setTimeout(() => {
            thirdComic.remove();
            body.append(FifthComic);
        }, 9000)
        setTimeout(() => {
            FifthComic.remove();
            Overlay.remove();
        }, 13000)
   }
    if(count === 3){
        const startComic = createElement({
            tagName: "img",
            attributes: {
                src: "./assets/RickComix/rickComix[11].png",
                style: "position:fixed;" + "top:30%;" + "left:35%;" + "z-index:11;" + "width:50%;"
            }
        })
        body.append(startComic);
        setTimeout(() => {
            window.close();
        }, 5000);
        }
    count++;
})
