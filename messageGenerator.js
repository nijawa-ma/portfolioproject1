// JavaScript source code
const state = ["You've been working too hard", "Things have been going ok for you recently", "You're in a good headspace, life has been relaxed for you"];
const vacationType = ["You need a relaxing, calm vacation", "You need a vacation that's a balance between relaxation and adventure'", 
"Take yourself out of your comfort zone for this vacation"];
const relaxingDestinations = ["Koh Samuhi", "Maldives", "Hawaii", "Fiji"];
const balancedDestinations = ["Amalfi Coast", "Paris", "Australia", "South Africa"];
const adventureDestinations = ["Queenstown, New Zealand", "Mt. Kilimanjaro", "the Pacific Coast Trail", "the Himalayas"];


const generateState = () => {
	//Randomly generate an emotional state; returns a string
	const emotionalState = Math.floor(Math.random() * state.length);
	return state[emotionalState]
}

const getStateIndex = (emotionalState) => {
	//Get the index value for that emotional state; returns an int
	return state.indexOf(emotionalState);
}

const getVacationDestination = (stateIndex) => {
	//Generate a vacation destination using the index of the emotional state; returns a string
	let vacationDestination = '';
	if (stateIndex === 0) {
		vacationDestination = relaxingDestinations[Math.floor(Math.random() * relaxingDestinations.length)];
	} else if (stateIndex === 1) {
		vacationDestination = balancedDestinations[Math.floor(Math.random() * balancedDestinations.length)];
	} else {
		vacationDestination = adventureDestinations[Math.floor(Math.random() * adventureDestinations.length)];
	};
	return vacationDestination
}

const generateVacationMessage = () => {
	const emotionalState = generateState();
	const emotionalStateIndex = getStateIndex(emotionalState);
	const vacationJustification = vacationType[emotionalStateIndex];
	const emotionalStateDestination = getVacationDestination(emotionalStateIndex);

	return `${emotionalState}\n${vacationJustification}\nYou should take a vaction to ${emotionalStateDestination}!`
}

console.log(generateVacationMessage());