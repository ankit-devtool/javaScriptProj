// const TypeWriter = function (txtElement, words, wait = 3000) {

// }

// // Type Method
// TypeWriter.prototype.type = function () {
//     // current index of word
//     const current = this.wordsIndex % this.words.length;

//     //get full of text current word
//     const fulltxt = this.words[current];

//     //check of deleting
//     if (this.isDeleing) {
//         // Remove Char
//         this.txt = fulltxt.substring(0, this.txt.length - 1);

//     } else {
//         // Add char

//         this.txt = fulltxt.substring(0, this.txt.length + 1);
//     }

//     //initialise type speed
//     let typeSpeed = 300;

//     //insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     if (this.isDeleing) {
//         typeSpeed /= 2;
//         console.log(typeSpeed)
//         this.isDeleing;
//     }
//     // this.txtElement.
//     //type speed
//     if (!this.isDeleing && this.txt === fulltxt) {
//         typeSpeed = this.wait;
//         this.isDeleing = true;
//         console.log(typeSpeed, this.wait)
//     }
//     else if (this.isDeleing && this.txt === '') {
//         this.isDeleing = false;
//         this.wordsIndex++;
//         // Pause before start typing
//         typeSpeed = 500;
//         console.log(typeSpeed, this.wait)

//     }
//     setTimeout(() => {
//         this.type()
//     }, typeSpeed);
// }

// // Init on DOM load
// document.addEventListener('DOMContentLoaded', init);

// //INit App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     new TypeWriter(txtElement, words, wait);
// }


class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordsIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleing = false;
    }
    type() {
        // current index of word
        const current = this.wordsIndex % this.words.length;

        //get full of text current word
        const fulltxt = this.words[current];

        //check of deleting
        if (this.isDeleing) {
            // Remove Char
            this.txt = fulltxt.substring(0, this.txt.length - 1);

        } else {
            // Add char

            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }

        //initialise type speed
        let typeSpeed = 300;

        //insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        if (this.isDeleing) {
            typeSpeed /= 2;
            console.log(typeSpeed)
            this.isDeleing;
        }
        // this.txtElement.
        //type speed
        if (!this.isDeleing && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleing = true;
            console.log(typeSpeed, this.wait)
        }
        else if (this.isDeleing && this.txt === '') {
            this.isDeleing = false;
            this.wordsIndex++;
            // Pause before start typing
            typeSpeed = 500;
            console.log(typeSpeed, this.wait)

        }
        setTimeout(() => {
            this.type()
        }, typeSpeed);
    }

}
// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

//INit App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}