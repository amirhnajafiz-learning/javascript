// Our first mini project
// Finding the prime numbers

let n = 7321;

let isPrime = true;

for (let i = 2; i <= parseInt(n**(0.5)); i++) 
{
	if (n % i == 0)
	{
		isPrime = false;
		console.log(`> ${i}`);
		break;
	}
}

console.log(isPrime);