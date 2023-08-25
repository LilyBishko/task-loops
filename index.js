// 1
function createArray(start, end) {
    if (start > end) {
      console.error("Початкове значення повинно бути менше або рівне кінцевому значенню");
      return [];
    }
  
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
  let arr = createArray(2, 9);
  console.log(arr);

  // 2
  function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      const repetitions = i - a + 1;
      const numbers = Array.from({ length: repetitions }, () => i);
      console.log(numbers.join(','));
    }
  }
  
  printNumbers(1, 3);

  // 3
  function randArray(k) {
    const result = [];
    for (let i = 0; i < k; i++) {
      const randomNumber = Math.floor(Math.random() * 500) + 1;
      result.push(randomNumber);
    }
    return result;
  }
  
  console.log(randArray(5));
  // 4
  function compact(array) {
    return Array.from(new Set(array));
  }
  
  const array = [5, 3, 4, 5, 6, 7, 3];
  const newArr = compact(array);
  console.log(newArr);

  // 5
  function separateByType(firstArray) {
    return firstArray.reduce((result, item) => {
      if (Array.isArray(item)) {
        result[1].push(...item.filter(subItem => typeof subItem !== 'number'));
      } else if (typeof item !== 'number') {
        result[1].push(item);
      } else {
        result[0].push(item);
      }
      return result;
    }, [[], []]);
  }
  
  const firstArray = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  const [arrNew, nonNumberItems] = separateByType(firstArray);
  
  console.log(arrNew);
  console.log(nonNumberItems);

  // 6 
  function calc(a, b, op) {
    let result;
  
    switch (op) {
      case 1:
        result = a - b;
        break;
      case 2:
        result = a * b;
        break;
      case 3:
        result = a / b;
        break;
      default:
        result = a + b;
    }
  
    return result;
  }
  
  console.log(calc(10, 3, 1)); 

  // 7
  function findUnique(myArr) {
    const uniqueSet = new Set(myArr);
    return uniqueSet.size === myArr.length;
  }
  
  console.log(findUnique([1, 2, 3, 5, 3])); 
  console.log(findUnique([1, 2, 3, 5, 11])); 