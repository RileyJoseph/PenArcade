WritersApp.controller('HomeCtrl',['$scope','$resource','$rootScope','$interval','UserService','$modal',function($scope,$resource,$rootScope,$interval,UserService,$modal){

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
  $scope.currentUser = UserService.currentUser;
  });

  console.log('home ctrl loaded!! woah!')

angular.module('ui.bootstrap').controller('HomeCtrl', function ($scope) {
  $scope.isCollapsed = false;
});

  $scope.showLogin = function(){
    // alert("download postman dick")
    $modal.open({
      templateUrl: '/views/auth/loginModal.html',
      controller: 'AuthLoginModalCtrl'
    })
  };




var quotes = [
"Call me Ishmael. —Herman Melville, Moby-Dick (1851)",
"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. —Jane Austen, Pride and Prejudice (1813)",
"A screaming comes across the sky. —Thomas Pynchon, Gravity's Rainbow (1973)",
"Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice. —Gabriel García Márquez, One Hundred Years of Solitude (1967; trans. Gregory Rabassa)",
"Lolita, light of my life, fire of my loins. —Vladimir Nabokov, Lolita (1955)",
"Happy families are all alike; every unhappy family is unhappy in its own way. —Leo Tolstoy, Anna Karenina (1877; trans. Constance Garnett)",
"Riverrun, past Eve and Adam's, from swerve of shore to bend of bay, brings us by a commodius vicus of recirculation back to Howth Castle and Environs. —James Joyce, Finnegans Wake (1939)",
"It was a bright cold day in April, and the clocks were striking thirteen. —George Orwell, 1984 (1949)",
"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair. —Charles Dickens, A Tale of Two Cities (1859)",
"I am an invisible man. —Ralph Ellison, Invisible Man (1952)",
"The Miss Lonelyhearts of the New York Post-Dispatch (Are you in trouble?—Do-you-need-advice?—Write-to-Miss-Lonelyhearts-and-she-will-help-you) sat at his desk and stared at a piece of white cardboard. —Nathanael West, Miss Lonelyhearts (1933)",
"You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. —Mark Twain, Adventures of Huckleberry Finn (1885)",
"Someone must have slandered Josef K., for one morning, without having done anything truly wrong, he was arrested. —Franz Kafka, The Trial (1925; trans. Breon Mitchell)",
"You are about to begin reading Italo Calvino's new novel, If on a winter's night a traveler. —Italo Calvino, If on a winter's night a traveler (1979; trans. William Weaver)",
"The sun shone, having no alternative, on the nothing new. —Samuel Beckett, Murphy (1938)",
"If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. —J. D. Salinger, The Catcher in the Rye (1951)",
"Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo. —James Joyce, A Portrait of the Artist as a Young Man (1916)",
"This is the saddest story I have ever heard. —Ford Madox Ford, The Good Soldier (1915)",
"I wish either my father or my mother, or indeed both of them, as they were in duty both equally bound to it, had minded what they were about when they begot me; had they duly considered how much depended upon what they were then doing;—that not only the production of a rational Being was concerned in it, but that possibly the happy formation and temperature of his body, perhaps his genius and the very cast of his mind;—and, for aught they knew to the contrary, even the fortunes of his whole house might take their turn from the humours and dispositions which were then uppermost:—Had they duly weighed and considered all this, and proceeded accordingly,—I am verily persuaded I should have made a quite different figure in the world, from that, in which the reader is likely to see me. —Laurence Sterne, Tristram Shandy (1759–1767)",
"Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show. —Charles Dickens, David Copperfield (1850)",
"Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed. —James Joyce, Ulysses (1922)",
"It was a dark and stormy night; the rain fell in torrents, except at occasional intervals, when it was checked by a violent gust of wind which swept up the streets (for it is in London that our scene lies), rattling along the house-tops, and fiercely agitating the scanty flame of the lamps that struggled against the darkness. —Edward George Bulwer-Lytton, Paul Clifford (1830)",
"It was a wrong number that started it, the telephone ringing three times in the dead of night, and the voice on the other end asking for someone he was not. —Paul Auster, City of Glass (1985)",
"Through the fence, between the curling flower spaces, I could see them hitting. —William Faulkner, The Sound and the Fury (1929)",
"124 was spiteful. —Toni Morrison, Beloved (1987)",
"Somewhere in la Mancha, in a place whose name I do not care to remember, a gentleman lived not long ago, one of those who has a lance and ancient shield on a shelf and keeps a skinny nag and a greyhound for racing. —Miguel de Cervantes, Don Quixote (1605; trans. Edith Grossman)",
"Mother died today. —Albert Camus, The Stranger (1942; trans. Stuart Gilbert)",
"Every summer Lin Kong returned to Goose Village to divorce his wife, Shuyu. —Ha Jin, Waiting (1999)",
"The sky above the port was the color of television, tuned to a dead channel. —William Gibson, Neuromancer (1984)",
"I am a sick man . . . I am a spiteful man. —Fyodor Dostoyevsky, Notes from Underground (1864; trans. Michael R. Katz)",
"Where now? Who now? When now? —Samuel Beckett, The Unnamable (1953; trans. Patrick Bowles)",
"Once an angry man dragged his father along the ground through his own orchard. 'Stop!' cried the groaning old man at last, 'Stop! I did not drag my father beyond this tree.' —Gertrude Stein, The Making of Americans (1925)",
"In a sense, I am Jacob Horner. —John Barth, The End of the Road (1958)",
"It was like so, but wasn't. —Richard Powers, Galatea 2.2 (1995)",
"Mrs. Dalloway said she would buy the flowers herself. —Virginia Woolf, Mrs. Dalloway (1925)",
"All this happened, more or less. —Kurt Vonnegut, Slaughterhouse-Five (1969)",
"They shoot the white girl first. —Toni Morrison, Paradise (1998)",
"For a long time, I went to bed early. —Marcel Proust, Swann's Way (1913; trans. Lydia Davis)",
"The moment one learns English, complications set in. —Felipe Alfau, Chromos (1990)",
"Dr. Weiss, at forty, knew that her life had been ruined by literature. —Anita Brookner, The Debut (1981)",
"I was the shadow of the waxwing slain / By the false azure in the windowpane; —Vladimir Nabokov, Pale Fire (1962)",
"Ships at a distance have every man's wish on board. —Zora Neale Hurston, Their Eyes Were Watching God (1937)",
"I had the story, bit by bit, from various people, and, as generally happens in such cases, each time it was a different story. —Edith Wharton, Ethan Frome (1911)",
"It was a pleasure to burn. —Ray Bradbury, Fahrenheit 451 (1953)",
"It was love at first sight. —Joseph Heller, Catch-22 (1961)",
"Vaughan died yesterday in his last car-crash. —J. G. Ballard, Crash (1973)",
"Every one suspects himself of at least one of the cardinal virtues, and this is mine: I am one of the few honest people that I have ever known. -F. Scott Fitzgerald, The Great Gatsby (1925)",
"So we beat on, boats against the current, borne back ceaselessly into the past. -F. Scott Fitzgerald, The Great Gatsby (1925)",
"'Oh, Jake,' Brett said, 'we could have had such a damned good time together.' Ahead was a mounted policeman in khaki directing traffic. He raised his baton. The car slowed suddenly pressing Brett against me. 'Yes,' I said. 'Isn’t it pretty to think so?' -Ernest Hemingway, The Sun Also Rises (1926)",
"Tomorrow, I’ll think of some way to get him back. After all, tomorrow is another day. -Margaret Mitchell, Gone With The Wind(1936)",
"Don’t ever tell anybody anything. If you do, you start missing everybody. -J.D. Salinger, The Catcher in the Rye (1951)",
"As you from crimes would pardoned be, Let your indulgence set me free. -William Shakespeare, The Tempest (1610)"
]
var loop2 = function(){
  $scope.quotesList = quotes[Math.floor(Math.random() * quotes.length)];
}
$scope.quotesList = quotes[Math.floor(Math.random() * quotes.length)]
var myInt = $interval(loop2,20000)




// unirest.get("https://wordsapiv1.p.mashape.com/words/{wordSearch}/{type}")
// .header("X-Mashape-Key", "wFXahgUPfOmshRbeoP97Z8qgU4oip1sisOvjsnmlosNAANwWNS")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

}]);
