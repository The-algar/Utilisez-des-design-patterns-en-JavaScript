class Quiz {
    constructor(title, questionNumber) {
        if (title === 'partie-1' && questionNumber === 4) {
            this._title = title
            this._questionNumber = questionNumber
        } else {
            throw 'Les paramètres données ne sont pas les bons !'
        }
    }

    getAnswer() {
        return "C'était pas si difficile :)"
    }
}

// Ici j'instancie la question 4 du quizz
const quizz4 = new Quiz('partie-1', 4)
