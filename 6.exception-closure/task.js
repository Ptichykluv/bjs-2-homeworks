function parseCount(value) {
        const result = Number.parseFloat(value);
        if(Number.isNaN(result)) {
            throw new Error ('Невалидное значение');
        }
        return result;
    }
 
 
function validateCount(value) {
        try {
            return parseCount(value);
        } catch (error) {
            return error;
        }
    }


class Triangle {

    constructor(a, b, c) {

        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || c + b < a) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {

        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.perimeter / 2;
        let s = Number(math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return s;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }

    catch (error) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}