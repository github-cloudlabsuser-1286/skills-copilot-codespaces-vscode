const assert = require('assert');
const Calculator = require('./test.js').Calculator;

describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    describe('#add()', function() {
        it('should return 5 when adding 2 and 3', function() {
            assert.strictEqual(calculator.add(2, 3), 5);
        });

        it('should return -1 when adding -2 and 1', function() {
            assert.strictEqual(calculator.add(-2, 1), -1);
        });

        it('should return 0 when adding 0 and 0', function() {
            assert.strictEqual(calculator.add(0, 0), 0);
        });

        it('should return 10.5 when adding 5.5 and 5', function() {
            assert.strictEqual(calculator.add(5.5, 5), 10.5);
        });

        it('should return -3 when adding -1 and -2', function() {
            assert.strictEqual(calculator.add(-1, -2), -3);
        });
    });

    describe('#subtract()', function() {
        it('should return 1 when subtracting 3 from 4', function() {
            assert.strictEqual(calculator.subtract(4, 3), 1);
        });

        it('should return -1 when subtracting 1 from 0', function() {
            assert.strictEqual(calculator.subtract(0, 1), -1);
        });

        it('should return 0 when subtracting 0 from 0', function() {
            assert.strictEqual(calculator.subtract(0, 0), 0);
        });

        it('should return 2.5 when subtracting 2.5 from 5', function() {
            assert.strictEqual(calculator.subtract(5, 2.5), 2.5);
        });

        it('should return 1 when subtracting -1 from 0', function() {
            assert.strictEqual(calculator.subtract(0, -1), 1);
        });
    });

    describe('#multiply()', function() {
        it('should return 6 when multiplying 2 and 3', function() {
            assert.strictEqual(calculator.multiply(2, 3), 6);
        });

        it('should return -2 when multiplying -1 and 2', function() {
            assert.strictEqual(calculator.multiply(-1, 2), -2);
        });

        it('should return 0 when multiplying 0 and 5', function() {
            assert.strictEqual(calculator.multiply(0, 5), 0);
        });

        it('should return 12.5 when multiplying 2.5 and 5', function() {
            assert.strictEqual(calculator.multiply(2.5, 5), 12.5);
        });

        it('should return 1 when multiplying -1 and -1', function() {
            assert.strictEqual(calculator.multiply(-1, -1), 1);
        });
    });

    describe('#divide()', function() {
        it('should return 2 when dividing 6 by 3', function() {
            assert.strictEqual(calculator.divide(6, 3), 2);
        });

        it('should return "Error! Division by zero." when dividing by 0', function() {
            assert.strictEqual(calculator.divide(6, 0), "Error! Division by zero.");
        });

        it('should return 0 when dividing 0 by 5', function() {
            assert.strictEqual(calculator.divide(0, 5), 0);
        });

        it('should return 2.5 when dividing 5 by 2', function() {
            assert.strictEqual(calculator.divide(5, 2), 2.5);
        });

        it('should return -2 when dividing -4 by 2', function() {
            assert.strictEqual(calculator.divide(-4, 2), -2);
        });
    });

    describe('#percentage()', function() {
        it('should return 50 when 1 is 50% of 2', function() {
            assert.strictEqual(calculator.percentage(1, 2), 50);
        });

        it('should return 100 when 2 is 100% of 2', function() {
            assert.strictEqual(calculator.percentage(2, 2), 100);
        });

        it('should return 0 when 0 is 0% of 5', function() {
            assert.strictEqual(calculator.percentage(0, 5), 0);
        });

        it('should return 25 when 1 is 25% of 4', function() {
            assert.strictEqual(calculator.percentage(1, 4), 25);
        });

        it('should return -50 when -1 is -50% of 2', function() {
            assert.strictEqual(calculator.percentage(-1, 2), -50);
        });
    });
});