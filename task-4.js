// 1
function sumSliceArray(arr, first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second) ||
        first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
        throw new Error("Invalid input or indices are out of bounds.");
    }
    
    return arr[first] + arr[second];
}

try {
    const array = [1, 2, 3, 4, 5];
    const index1 = parseInt(prompt("Введіть перший індекс:"));
    const index2 = parseInt(prompt("Введіть другий індекс:"));
    
    const result = sumSliceArray(array, index1, index2);
    console.log("Результат сумування:", result);
} catch (error) {
    console.log("Помилка:", error.message);
}

// 2
function checkAge() {
    try {
        const name = prompt("Введіть своє ім'я:");
        if (!name) throw new Error("The field is empty! Please enter your name");

        const age = parseInt(prompt("Введіть свій вік:"));
        if (isNaN(age)) throw new EvalError("Invalid age format. Please enter a numeric value.");

        if (age < 18 || age > 70) throw new RangeError("Age out of allowed range.");

        const status = prompt("Введіть свій статус (адмін, модератор, користувач):");
        if (!["адмін", "модератор", "користувач"].includes(status))
            throw new EvalError("Invalid status. Please enter a valid status.");

        alert("Ви маєте доступ до перегляду фільму!");
    } catch (error) {
        console.log("Назва помилки:", error.name);
        console.log("Опис помилки:", error.message);
        alert("Помилка: " + error.message);
    }
}

// 3
function calcRectanglArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number')
        throw new TypeError("Both 'width' and 'height' must be numeric values.");
    return width * height;
}

try {
    const width = parseFloat(prompt("Введіть ширину прямокутника:"));
    const height = parseFloat(prompt("Введіть висоту прямокутника:"));
    console.log("Площа прямокутника:", calcRectanglArea(width, height));
} catch (error) {
    console.log("Помилка:", error.message);
}

// 4

class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}

function showMonthName(month) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (month >= 1 && month <= 12) return months[month - 1];
    throw new MonthException("Incorrect month number");
}

try {
    console.log(showMonthName(5));  
    console.log(showMonthName(14)); 
} catch (error) {
    if (error instanceof MonthException) console.log(error.name, error.message);
    else console.log("Unknown error:", error);
}

// 5

function showUser(id) {
    if (id < 0) {
        throw new Error("ID must not be negative: " + id);
    }
    return { id };
}

function showUsers(ids) {
    const validUsers = [];
    for (const id of ids) {
        try {
            validUsers.push(showUser(id));
        } catch (error) {
            if (error.message.includes("ID must not be negative")) {
                console.log("Error:", error.message);
            } else {
                console.log("Unknown error:", error);
            }
        }
    }
    return validUsers;
}

const users = showUsers([7, -12, 44, 22]);
console.log(users);