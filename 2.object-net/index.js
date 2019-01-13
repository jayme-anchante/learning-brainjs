// first, we specify the training data as two objects, an input and an output
// then, we instantiate a brainjs object called net
// then, we train the neural net
// and log the error every 100 epochs
// and log a prediction in the console

// the neural net architecture is composed of 2 input neurons, 1 hidden layer with 3 neurons and an output layer with 1 neuron

const colors = [
	{ green: 0.2, blue: 0.4 },
	{ green: 0.4, blue: 0.6 },
	{ red: 0.2, green: 0.8, blue: 0.8 },
	{ green: 1, blue: 1 },
	{ red: 0.8, green: 1, blue: 1 },
	{ red: 1, green: 1, blue: 1 },
	{ red: 1, green: 0.8, blue: 0.8 },
	{ red: 1, green: 0.6, blue: 0.6 },
	{ red: 1, green: 0.4, blue: 0.4 },
	{ red: 1, green: 0.31, blue: 0.31 },
	{ red: 0.8 },
	{ red: 0.6, green: 0.2, blue: 0.2 }
	];

const brightnesses = [
	{ dark: 0.8 },
	{ neutral: 0.8 },
	{ light: 0.7 },
	{ light: 0.8 },
	{ light: 0.9 },
	{ light: 1 },
	{ light: 0.8 },
	{ neutral: 0.7, light: 0.5 },
	{ dark: 0.5, neutral: 0.5 },
	{ dark: 0.6, neutral: 0.3 },
	{ dark: 0.85 },
	{ dark: 0.9 }
	];

const trainingData = [];

for (let i = 0; i < colors.length; i++) {
	trainingData.push({
		input: colors[i],
		output: brightnesses[i]
		})	
	};

const net = new brain.NeuralNetwork({ hiddenLayers: [3]});

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({
	red: 0.9
	}));
