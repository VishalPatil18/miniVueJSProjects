const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            count: 3,
            correctAnswers: 0,
            wrongAnswers: 0,
            questions: [
                {
                    question: "My name is?",
                    options: {a: "Vishal", b: "Vishal Ramesh Patil", c: "Vishal Patil", d: "Patil Vishal Ramesh"},
                    correctAnswer: 'a',
                },
                {
                    question: "Did you answered the first question correctly?",
                    options: {a: "Yes", b: "No", c: "Maybe", d: "I don't know"},
                    correctAnswer: 'd',
                },
                {
                    question: "What is the answer of 1024 * 2?",
                    options: {a: "Two zero four eight", b: "Two Thousand fourty eight", c: "2048", d: "008888"},
                    correctAnswer: 'c',
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value;
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer']) this.correctAnswers++;
            else this.wrongAnswers++;
            this.selectedAnswer == '';
        },
        nextQuestion() {
            this.index++;
            this.selectedAnswer = '';
        },
        playAgain() {
            this.index = 0;
            this.selectedAnswer = '';
            this.correctAnswers = 0;
            this.wrongAnswers = 0;
        }
    }
})

app.mount('#app')