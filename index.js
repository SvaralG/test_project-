const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; // заданы аргументы  a и b  и посчитана суммв для них 

    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; // выполняется условие если сумма больше 50, то бонус= 50, если меньше 50, то бонус равен сумме a+b
    return bonus;
    };
console.log (calculateBonus(50,30))