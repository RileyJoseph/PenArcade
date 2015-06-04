WritersApp.controller('ToolsCtrl',['$scope','$resource','$rootScope','$interval',function($scope,$resource,$rootScope,$interval){


  console.log('tools ctrl loaded!! woah!')


var prompts = [
"Draw an imaginary constellation. Write a story such as ancient people might have told about it.",
"Describe a real made-up dream or nightmare.",
"Write about a day you'd like to forget",
"Imagine yourself in a different century and describe an average day in your life.",
"Which character from a book would you most like to meet and why? ",
"Invent a monster and describe it.  Tell where it lives, what it eats, and what it does.",
"Write about what you didn't do this weekend.",
"Think about an incident that happened to you and exaggerate in the telling. Make it into a tall tale.",
"Write about a time you performed in front of an audience, or how and when you'd like to.",
"Write about a disappointment.",
"Write about something minor that turned into a big deal.",
"Write about a time you were talked into something and you regretted it.",
"Write about an experience in a hospital.",
"Write about a disastrous trip or vacation.",
"Write about a time you tried to help and ended up making things worse. ",
"Write about moving to another city or neighborhood. What kind of people live there, what is it like?",
"Write about being a misfit.",
"Write about a day spent in another country",
"Write about a time you out-smarted someone.",
"It started out as an unusual Monday morning, when I...",
"As I approached the deserted house at the end of the road, I saw... ",
"Write a short biography of your mother.",
"Write a short biography of your father.",
"Write about some of the things that you worry about. Why?",
"Describe the most difficult thing about being your age.",
"Two Identical twins secretly alternate days at work. You each share the same ID, social security number, and clothes. Nobody knows theres actually two of you. One day youre BOTH at home and call in sick, but your manager is confused saying that youre already there. --reddit user SummonKnight",
"A serial killer is called for jury duty. At the trial, he finds out that the person on trial has been falsely accused for the serial killer's crimes. --reddit user Man0fMayhem",
"Time travel is real, and time tourists tend to show up in large numbers around major historical events. One day, billions of time tourists are in ships above the city, quietly waiting. --reddit user Krendyll",
"Two prison guards discuss a prisoner who is apparently immortal. He's been in jail with a life sentence for so long that no one knows the reason for his imprisonment. --reddit user Reading_Raptor",
"You have left the dystopian nation you have lived in for your entire life; only to see that, despite propaganda, the nation is only the size of a small town and no one knows the nation exists. --reddit user BlackVoidDragon",
"You wake up, make yourself a nice cup of coffee and enjoy the view of the morning sun rising from the sea. Then you remember that your house isn't supposed to be anywhere near a sea... --reddit user cyberdsaiyan",
"The year is 1492, Columbus has just arrived in the Americas. But instead of finding savage Indians, he finds their technology has surpassed the Europeans. --reddit user WHATS_MY_TITLE",
"A formidable and highly feared monster hunter walked into an infested forest one night, holding up a sign that says 'Kill me'. --reddit user TheSs7SsN",
"You're the bartender at one of those small, hole-in-the-wall drinking establishments. However, your clientele every Friday night, consists of all major deities and religious figures, down on Earth to have a drink and unwind from the rigors of being a god/prophet/all-knowing-being... --reddit user Gray_side_Jedi",
"You blast yourself out the airlock to make a heroic sacrifice for your ship and it's crew. As the endless black of space begins to fill your vision, it occurs to you- you're breathing just fine. --reddit user Nerfman2227",
"A lowly bandit unwittingly kills the hero prophesied to save the world, and now must pose as said hero and bullshit his way through the rest of his adventure in an attempt to fulfill the prophesy. --reddit user Jesse_Supertramp",
"In 1515 Henry VIII sentenced a scientist to 500 years in prison for crimes against God. It's 500 years later and they have just emerged un-aged. --reddit user hhudsontaylor",
"Serial killer has been monitoring his next victim's movements for months. She is a loner and the perfect target. One day she disappears and nobody notices but him. --reddit user panicattackk",
"You are a teenager with the ability to measure how 'Dangerous' people are on a scale from 1 to 10 just by looking at them. A normal child would be a 1, while a trained man with an assault rifle might be a 7. Today, you notice the unassuming new kid at school measures a 10. --reddit user Aradicus",
"You're midway into your flight when you, feeling bored, decided to surf the Internet. You read breaking news about another plane disappearance. You're on that flight. --reddit user FayBooLess",
"A wife kills her husband. Write how you can sympathize for both characters.",
"Valhalla is filled with the strongest warriors the world has ever known. Vikings, Spartans, Mongols, Romans, Samurai, Spetznaz, JSOC Operators. And in that corner over there? That's Ted, from accounting. --reddit user MPSDragline",
"Instead of Oceans, they are all big forests, that gets taller and darker instead of deeper, with more dangerous animals living further out in the forest. A person decides to cross the Mariana Trench --reddit user thefragpotato",
"A new invention enables people to remember their dreams with absolute clarity. It turns out we were forgetting them for a very good reason. --reddit user pw-it",
"For generations, Hogwarts students have been divided into four houses. As you sit beneath the Sorting Hat, you become the first student chosen for a mysterious fifth house. --reddit user racemythoughts",
"The lottery is an Institution designed to catch Time Travelers. --reddit user curvebombr",
"",
"",

]

var quickExercises = [
"Who, What, Why, When, Where? = Story. Got it? Now consider adding 'how' to the mix. Answer the questions as quickly as you can.",
"Who is coming round the corner? What is their secret? What are they carrying?",
"Why did John lose his temper with Jane? Where did he go after he stormed out? What happened to him when he got there?",
"Who has found something at the back of the wardrobe? What have they found? What will they do next?",
"Who cheated John? What did they cheat him at? Will John do something?",
"What building can you see Racheal leaving? What is she wearing? Where is she going?",
"Why is Ian finding it difficult to steer the car? Where is he going? Who is there?",
"He had cards up his sleeve. He literally had cards up his sleeve!!",
"Where did the accident happen? Who was hurt? Who helped?",
"The view is blocked by? Whose view is blocked? If the view wasn’t blocked what would they see?",
"Who closes the window? Why? How old are they?",
"Who is James? How tall is he? Why is he alone?",
"Who killed Ranger Grey? Where did he die? How?",
"What did Jack find down by the river? How did he know it would be there?",
"Jenny slammed the door in Matt’s face because …",
"The plane crashed because…",
"Paul read his wife’s diary and discovered...",
"Victoria pulled at the window but she was trapped. Now she had no escape from..",
"Patrick looked over the bridge and...",
"Stacey wept because...",
"Jack and Maureen took their first steps towards...",
"Rodney looked down the...",
"The sun went in and Maureen went...",
"The small girl ran away from...",
"Travis had never seen a..._____....look so scared before...",
"It was time for...",
"Her arms ached but she couldn’t stop swimming because...",
"Ben climbed the tree and..."
]

var abstractExercises = [
"The painting was familiar.",
"The stone was covered in a fine green moss.",
"A small mound of stones.",
"The outline of a small building",
"The liquid was dark.",
"The fine sand stuck between his/her toes.",
"The coat was shabby.",
"The light shone directly on to the boat.",
"The pavement was cracked.",
"The buildings were tall.",
"A slow blink.",
"The bottles clanked.",
"The white daisies were outlined in black.",
"His hand was freckled.",
"The tree was bare, black against the orange sky.",
"She took a deep breath.",
"The seat was warm.",
"The wind blew directly into his face.",
"The mug was stained.",
"Just an ordinary toothbrush.",
"The corners of her mouth turned down a little.",
"A torn coat.",
"A dead dog.",
"A bare tree.",
"Old files.",
"A chipped cup.",
"Freshly cut grass.",
"The color orange."
]


$scope.nextQuickExercise = function(){
  $scope.quickSelect()
};
$scope.quickSelect = function(){
  $scope.quickExercises2 = quickExercises[Math.floor(Math.random() * quickExercises.length)]
}

$scope.nextAbstractExercise = function(){
  $scope.abstractSelect()
}
$scope.abstractSelect = function(){
  $scope.abstractExercises2 = abstractExercises[Math.floor(Math.random() * abstractExercises.length)]
}

$scope.nextPrompt = function(){
  $scope.promptSelect()
}
$scope.promptSelect = function(){
  $scope.prompts2 = prompts[Math.floor(Math.random() * prompts.length)]
}


$scope.quickSelect();
$scope.abstractSelect();
$scope.promptSelect();

}]);