function Question(text, choices, answer){
	this.text=text;
	this.choices=choices;
	this.answer=answer;
} 

Question.prototype.correctAnswer = function(choice) {
	return choice===this.answer;
};


var questions = [
	new Question("What is the name of Tyrion’s first wife?", ["Tysha","Sansa","Alayaya","Shae"], "Tysha"),
	new Question("What is the name of Lord Tywin Lannister’s deceased wife?", ["Lady Maria","Lady Joanna","Lady Dorna","Lady Jeyne"], "Lady Joanna"),
	new Question("What is Hodor’s real name?", ["Walder","Willas","Hank","Homer"], "Walder"),
	new Question("How did Rickon name his direwolf?", ["Summer","Autumn","Ghost","Shaggydog"], "Shaggydog"),
	new Question("Who was Jon Arryn before his death?", ["Warden of the East","Warden of the South","Warden of the North","Warden of the West"], "Warden of the East"),
	new Question("To whom has Samwell Tarly’s house sworn allegiance?", ["To nobody","To the Night’s Watch","To house Tyrell","To house Stark"], "To house Tyrell"),
	new Question("How is Daenerys Targaryen related to Jon Snow?", ["She is his cousin.","She is his aunt","They are not related","She is his niece"], "She is his aunt"),
	new Question("What was the name of the witch that Daenerys burned on the funeral pyre of Khal Drogo?", ["Pyat Pree","Quaithe","Jhiqui","Mirri Maz Duur"], "Mirri Maz Duur"),
	new Question("Who pushed Bran from the tower he was climbing in season 1 episode 1?", ["Cercei Lannister","Tyrion Lannister","Jaime Lannister","Tywin Lannister"], "Jaime Lannister"),
	new Question("How did Joffrey name the Valyrian steel sword made of Ice, that his grandfather Lord Tywin Lannister gave to him?", ["Oathkeeper","Needle","Widow’s Wail","Lion’s Claw"], "Widow’s Wail"),
	new Question("What was the name of the castle where Arya shortly served as Lord Tywin’s cupbearer?", ["Harrenhal","Moat Cailin","Dragonstone","White Harbour"], "Harrenhal"),
	new Question("Where is Jaqen H’ghar from?", ["Braavos","Yunkai","The free cities","Asshai"], "Braavos"),
	new Question("Who is the so-called King beyond the Wall?", ["Quorin Halfhand","The Lord of Bones","Mance Rayder","Rattleshirt"], "Mance Rayder"),
	new Question("What powers did Jojen Reed have?", ["He was a warg, like Bran.","He had green dreams","He had incredible hunting skills.","He was able to talk to the children of the forest."], "He had green dreams"),
	new Question("Who were the bride and bridegroom at the Red Wedding?", ["Roose Bolton and Walda Frey","Robb Stark and Jeyne Westerling","Edmure Tully and Roslin Frey","Robb Stark and Talisa  "], "Edmure Tully and Roslin Frey"),
	new Question("What is the sigil of House Mormont?", ["A rampant black bear on a white field","A silver trout on a red and blue background","A striding huntsman on green","A silver mailed fist on scarlet"], "A rampant black bear on a white field, surrounded by a green escutcheon")
];

function Quiz(_questions){
	this.score=0;
	this.questions=_questions;
	this.questionIndex=0;
}

Quiz.prototype.getQuestionIndex=function(){
	return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded=function(){
	return this.questions.length===this.questionIndex;
};

Quiz.prototype.guess=function(answer){
	if (this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}

	this.questionIndex++;
};

var quiz = new Quiz(questions);

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber	 + " of " + quiz.questions.length;
}

function showScores(){
	var gameOverHtml="<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your score:" +quiz.score + "</h2>";
	var element =document.getElementById("quiz");
	element.innerHTML=gameOverHtml;
}


function populate() {
	if (quiz.isEnded()){
		showScores();
	}
	else {
	
		var element = document.getElementById("question");
		element.innerHTML= quiz.getQuestionIndex().text;
		
		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++){
			var elem=document.getElementById("choice" + i);
			elem.innerHTML=choices[i];
			guessAnswer("btn"+i,choices[i]);
		}
		showProgress();
	}
}

function guessAnswer(id,_guess){
	var button=document.getElementById(id);
	button.onclick = function() {
		quiz.guess(_guess);
		populate();
	};
}


populate();