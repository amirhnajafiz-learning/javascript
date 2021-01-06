// Finding the prime numbers by a function

function is_prime(number=2)
{
	for (let i = 2; i <= parseInt(n**(0.5)); i++) 
	{
		if (n % i == 0)
		{
			console.log(`> ${i}`);
			return false;
		}
	}
	return true;
}

console.log(is_prime(12));
console.log(is_prime(1000000000002));
console.log(is_prime(1000000000001));
console.log(is_prime(1144230000021));
console.log(is_prime(2144121));