// in JavaScript, there 6 types: booleans, numbers, strings, objects, null and undefined

// first, we specify the training data from an object containing the name of a restaurant and the day of the week
// then, we instantiate a brainjs object called net
// then, we train the neural net
// and log the stats
// and log a prediction in the console

// lastly, we specify a function to return a string with the restaurant with the highest probability

const restaurants = {
	"Brilliant Yellow Corral": "Monday",
	"Penny's": "Tuesday",
	"Right Coast Wings": "Wednesday",
	"The Delusion Last Railway Car": "Thursday",
	"Fun Day Inn": "Friday",
	"JHOP": "Saturday",
	"Owls": "Sunday"
	};

// input: {Monday, Tuesday etc}	
// output: {Restaurant1, Restaurant2}

const trainingData = [];

for (let restaurantName in restaurants) {
	const dayOfWeek = restaurants[restaurantName];
	trainingData.push({
		input: { [dayOfWeek]: 1 },
		output: {[restaurantName]: 1}
	});
};

const net = new brain.NeuralNetwork( {hiddenLayers: [3]});

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({"Monday": 1}));

function restaurantForDay(dayOfWeek) {
	const result = net.run({ [dayOfWeek]: 1 })
	let highestValue = 0;
	let highestRestaurantName = "";
	for (let restaurantName in result) {
		if (result[restaurantName] > highestValue) {
			highestValue = result[restaurantName];
			highestRestaurantName = restaurantName;
		}
	}
	return highestRestaurantName;
}

console.log(restaurantForDay("Monday"));
