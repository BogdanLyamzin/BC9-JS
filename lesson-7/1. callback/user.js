const user = {
    name: "Годрик",
    lastName: "Гриффиндор",
    sword: "Годрик Гриффиндор",
    scores: {
        basicMagic: 70,
        flight: 40,
        fight: 100
    },
    getModifyScores(func){
        const newTabel = {};
        for(const [key, value] of Object.entries(this.scores)){
            newTabel[key] = func(value);
        }
        return newTabel;
    }
};