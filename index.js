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
    if (num == 0) {
        f = 1;
    }
    for (i = 1; i <= num; i++) {
        f = i * prev;
        prev = f;
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

