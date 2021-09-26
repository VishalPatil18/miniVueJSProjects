<template>
    <div class="calculator">
        <div class="display">{{current || '0'}}</div>
        <div @click="clear" class="btn">AC</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="percent" class="btn">%</div>
        <div @click="divide" class="btn operator">/</div>
        <div @click="append('7')" class="btn">7</div>
        <div @click="append('8')" class="btn">8</div>
        <div @click="append('9')" class="btn">9</div>
        <div @click="multiply" class="btn operator">x</div>
        <div @click="append('4')" class="btn">4</div>
        <div @click="append('5')" class="btn">5</div>
        <div @click="append('6')" class="btn">6</div>
        <div @click="subtract" class="btn operator">-</div>
        <div @click="append('1')" class="btn">1</div>
        <div @click="append('2')" class="btn">2</div>
        <div @click="append('3')" class="btn">3</div>
        <div @click="add" class="btn operator">+</div>
        <div @click="append('0')" class="btn zero">0</div>
        <div @click="dot" class="btn">.</div>
        <div @click="equal" class="btn operator">=</div>
    </div>
</template>

<!-- script block - the data and the logic for the template is maintained. Its similar to JS -->
<script>
export default {
    name: 'Calculator',
    data() {
        return {
            previous: null,
            current: '',
            operator: null,
            operatorClicked: false,
        }
    },
    methods: {
        clear() {
            this.current = ''
        },
        sign() {
            this.current = this.current.charAt(0) === '-' ?
                this.current.slice(1) : `-${this.current}`;
        },
        percent() {
            this.current = `${parseFloat(this.current) / 100}`
        },
        append(number) {
            if(this.operatorClicked) {
                this.current = '';
                this.operatorClicked = false;
            }
            this.current = `${this.current}${number}`; 
        },
        dot() {
            if(this.current.indexOf('.') === -1) {
                this.append('.');
            }
        },
        divide() {
            this.operator = (a, b) => a/b;
            this.previous = this.current;
            this.operatorClicked = true;
        },
        multiply() {
            this.operator = (a, b) => a*b;
            this.previous = this.current;
            this.operatorClicked = true;
        },
        subtract() {
            this.operator = (a, b) => a-b;
            this.previous = this.current;
            this.operatorClicked = true;
        },
        add() {
            this.operator = (a, b) => a+b;
            this.previous = this.current;
            this.operatorClicked = true;
        },
        equal() {
            this.current = `${this.operator(
                parseFloat(this.current),
                parseFloat(this.previous)
            )}`;
            this.previous = null;
        }
    } 
};
</script>

<!-- style block - here we style the markup template elements -->
<style scoped>

.calculator{
    width: 500px;
    border-radius: 20px;
    margin: 0 auto;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* here 1fr represents equal percentage to the columns */
    grid-auto-rows: minmax(50px, auto);
}

.display {
    border: 1px solid #999;
    border-radius: 4px;
    grid-column: 1 / 5;
    background: #333;
    color: white;
}
.zero {
    grid-column: 1/3;
}
.btn {
    margin: 1px;
    background: #f2f2f2;
    border: 1px solid #999;
    border-radius: 4px;
}
.operator {
    background: orange;
    color: white;
}
</style>
