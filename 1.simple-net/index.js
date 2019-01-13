// first, we specify the training data
// then, we instantiate a brainjs object called net
// then, we train the neural net
// and log the error every 100 epochs
// and log a prediction in the console

// the neural net architecture is composed of 2 input neurons, 1 hidden layer with 3 neurons and an output layer with 1 neuron

const trainingData = [
	{ input: [0, 0], output: [0] },
	{ input: [0, 1], output: [1] },
	{ input: [1, 0], output: [1] },
	{ input: [1, 1], output: [0] }
	];

const net = new brain.NeuralNetwork({ hiddenLayers: [3]});

net.train(trainingData, {
	log: (error) => console.log(error),
	logPeriod: 100
	});

console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
