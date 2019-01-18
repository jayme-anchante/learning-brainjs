// rawData = [{open: number, high: number, low: number, close: number}]

const trainingData = [
	"0+0=0",
	"0+1=1",
	"0+2=2",
	"0+3=3",
	"0+4=4",
	"0+5=5",
	
	"1+0=1",
	"1+1=2",
	"1+2=3",
	"1+3=4",
	"1+4=5",
	"1+5=6",
	
	"2+0=2",
	"2+1=3",
	"2+2=4",
	"2+3=5",
	"2+4=6",
	"2+5=7",
	
	"3+0=3",
	"3+1=4",
	"3+2=5",
	"3+3=6",
	"3+4=7",
	"3+5=8",
	
	"4+0=4",
	"4+1=5",
	"4+2=6",
	"4+3=7",
	"4+4=8",
	"4+5=9",
	
	"5+0=5",
	"5+1=6",
	"5+2=7",
	"5+3=8",
	"5+4=9",
	"5+5=10"
	];

// const inputMap = ["0", "+", "=", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// inputMap.length === inputSize
// 0+0=0 is defined as:
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const net = new brain.recurrent.LSTM({ hiddenLayers: [20] })

net.train(trainingData, { errorThresh: 0.025, log: (stats) => console.log(stats) });

console.log(net.run("0+1="));
console.log(net.run("4+1="));
console.log(net.run("2+1+1="));























