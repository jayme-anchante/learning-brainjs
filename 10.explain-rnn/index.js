const trainingData = [
    {input: "1", output: "2"}
];

const net = new brain.recurrent.LSTM();

// const inputMap = ["1", "NEW IDEA", "2"];
// [1, 0, 0]
// [0, 1, 0]
// [0, 0, 1]

// bonus: how would the training data look like, if w start with input of "2" and output "1"

// {input: "2", output: "1"}
// [0, 0, 1]
// [0, 1, 0]
// [1, 0, 0]
