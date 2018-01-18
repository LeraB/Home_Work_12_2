function isPrime(num) {
    if (num >= 1) {
        if (num === 2) {
            return true
        }
        for (var i = 2; i < Math.sqrt(num); i++) {

            if (num % i === 0) {
                return false;
            } else {
                return true;
            }
        }
    }

    return false;
}

// isPrime - Returns true or false, indicating whether the given number is prime.
isPrime(0);                         // false
isPrime(1);                          // false
isPrime(17);                         // true
isPrime(10000000000000);             // false


function factorial(num) {
  var prev = 1,
      f;
  if (num > 0) {
    if (num == 0) {
      f = 1;
    }
    for (i = 1; i <= num; i++) {
      f = i * prev;
      prev = f;
    }
  }
  else {
    return "Enter a positive number!";
  }
    return f;
}

// factorial - Returns a number that is the factorial of the given number.
factorial(0);                        // 1
factorial(1);                        // 1
factorial(6);                        // 720

function fib(num) {
    var prelast = 0,
        last = 1,
        f = 1;
    if (num == 0) {
        return 0;
    }
    for (i = 1; i < num; i++) {
        f = prelast + last;
        prelast = last;
        console.log('prelast =' + prelast);
        last = f;
        console.log('last =' + last);

        console.log('f =' + f)
    }

    return f;
}

// fib - Returns the nth Fibonacci number.
fib(0);                              // 0
fib(1);                              // 1
fib(10);                             // 55
fib(20);                             // 6765

function reverse(str) {
    var result = str.split(""),
        strNew = '';
    for (i = result.length - 1; i >= 0; i--) {
        strNew += result[i]
    }
    return strNew;
}
// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
reverse('');                     // ''
reverse('abcdef');               // 'fedcba'


function missing(arr) {
    var result = [], el,
        len = arr.length - 1;
    arr.sort();
    for (var i = 1; i <= arr[len]; i++) {
        el = arr.includes(i);
        if (el === false) {
            result.push(i);
        }

    }
    if (result.length === 0) {
        result = undefined;
    }
    return result;
}
// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
missing([]);                         // undefined
missing([1, 4, 3]);                  // 2
missing([2, 3, 4]);                  // 1
missing([5, 1, 4, 2]);               // 3
missing([1, 2, 3, 4]);               // undefined


function indexOf(arr, el) {
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === el) {
            return i;
        }
    }
    return -1;
}

//indexOf - Implement the indexOf function for arrays.
indexOf([1, 2, 3], 1);           // 0
indexOf([1, 2, 3], 4);              // -1


function isSorted(arr) {
    if (arr.length > 1) {
        for (var i = 0; i <= arr.length - 1; i++) {
            if ((arr[i] < arr[i - 1]) && (arr[i] < arr[i + 1]) || (arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
                return false;
            }
        }
    }
    return true;
}

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
isSorted([]);                        // true
isSorted([-Infinity, -5, 0, 3, 9]);  // true
isSorted([3, 9, -3, 10]);            // false


function isPalindrome(str) {
    var strLen = str.length,
        result = true,
        lowerStr = str.toLowerCase();
    for (var i = 0; i < strLen; i++) {
        if (lowerStr[i] !== lowerStr[strLen - 1 - i]) {
            result = false;
        }
    }
    return result;
}

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
isPalindrome('');                                // true
isPalindrome('abcdcba');                         // true
isPalindrome('abcd');                            // false
isPalindrome('A man a plan a canal Panama');     // true
