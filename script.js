// Greet User

const d = new Date(),
	hour = d.getHours();
console.log(d);
console.log(`It is the ${hour} hour`);

switch (true) {
	case hour < 10:
		greet = 'Good Morning';
		break;
	case hour < 13:
		greet = 'Good Day';
		break;
	case hour < 15:
		greet = 'Good Afternoon';
		break;
	case hour < 20:
		greet = 'Good Evening';
		break;

	default:
		greet = 'Good Night';
}
console.log(greet);
alert(greet);
