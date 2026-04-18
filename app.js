/* Js Starts */
const storyContainer = document.querySelector('.simstory-container');
const scaryStoryBtn = document.querySelector('#macabre-btn');
const funnyStoryBtn = document.querySelector('#yarn-btn');
const adventureStoryBtn = document.querySelector('#adventure-btn');

/* For Result */
const resultParagraph = document.querySelector('#result');
/* For The Stories */
const storyObj = {
  macabre: {
    story: "In the quiet village of Ashmoor, a relentless rain awakens something buried deep beneath the cemetery, and what begins as faint whispers soon grows into a haunting chorus, each voice eerily familiar and laced with longing, unsettling the villagers who dismiss it as wind or grief even as the ground softens and the air thickens with unease; Elias, broken by the recent death of his sister Mara, cannot ignore it, and when he hears her voice calling him from beneath the soil, he clings to it with desperate hope, returning night after night until he finally digs up her grave with bleeding hands, convinced she is alive and suffering, only to discover too late that what answers him is not truly her but something ancient using her as a doorway, as her eyes snap open, black and endless, and the voice that thanks him is layered with many others, revealing the whispers were never cries for help but invitations, and as the illusion shatters the ground convulses, graves split open, and the dead rise as one, drawn by grief and mimicking love to lure the living, while Elias tries to escape but is dragged down by the very earth he disturbed, and in a brief, haunting moment Mara’s true self surfaces just long enough to silently warn him he should have let her go before he is swallowed into darkness; by morning Ashmoor appears untouched, the rain gone and the graves undisturbed, yet something has changed, the whispers no longer belong to the cemetery but drift through homes, dreams, and memories, calling to the grieving with familiar voices, drawing them toward shadows and quiet places, as doors are found open, footprints appear where no one has walked, and faces seem subtly wrong, until it becomes clear that whatever was buried has not only risen, but now walks freely among the living, carrying the whispers within.",
    borderColor: "#ee4b2b"
  },
  yarn: {
    story: "Elias went to the graveyard at midnight because he swore he heard his sister Mara calling his name, which already sounds like a terrible life choice, but grief mixed with curiosity will make you do nonsense, so there he was, digging like a man who had never seen a single horror movie, sweating and muttering, “I'm coming, Mara,” only to finally crack open the coffin and watch her sit up, stare straight at him, and say, “First of all, why are you digging me up at 2 a.m., do you not have anything better to do?” and Elias, shaking, goes, “You said you were cold,” and she sighs loudly, dusts herself off, and replies, “Yes, because you buried me with that useless thin blanket, what kind of brother does that?” and before he can even process that she is talking like she just woke from a nap, the other graves start creaking open and Elias screams, ready to faint, but instead of monsters, more irritated dead people pop up one by one complaining like it is a town hall meeting, one man arguing his coffin is too small, one old woman yelling that someone buried her with the wrong wig, another guy demanding to know who burnt the rice at his funeral reception, and somehow Elias ends up in the middle of it all taking complaints like a customer service worker, saying things like “Okay sir, we will upgrade your coffin size” and “Ma, I will personally look into the wig situation,” while Mara stands there with her arms crossed saying, “You see why we don’t disturb the dead, now you have opened a complaint center,” and just when Elias thinks it cannot get worse, a skeleton in the back starts asking about WiFi, another one wants his password reset because he “forgot it after death,” and by morning Elias is sitting on a broken tombstone, exhausted, covered in mud, holding a notebook full of ridiculous requests, promising the entire graveyard he will fix everything, while Mara shakes her head and says, “Next time, just bring flowers like a normal human being, not a shovel and bad decisions.”",
    borderColor: "#f1be32"
  },
  adventure: {
    story: "Arin had never meant to become a hero, he was just a mapmaker's apprentice in the quiet coastal town of Lareth, but everything changed the day a storm washed a half-buried compass onto the shore, spinning wildly even when no one touched it; following its strange pull, Arin discovered an old sea chart hidden in his master's attic, marking an island that did not exist on any known map, and when the compass pointed toward it, he set out on a borrowed boat against every warning; the journey was anything but simple, as the sea twisted unnaturally, waves behaving like living things trying to turn him back, and at night he heard whispers in the wind that spoke his name and promised treasure, power, and even answers about his forgotten past; after days lost at sea, he finally reached the island, a place where cliffs seemed carved by impossible hands and forests shifted when he looked away, and there he met a strange castaway who claimed she had been waiting for him longer than she could remember; together they crossed ruins filled with puzzles that reacted to thought rather than touch, dodged traps triggered by memory, and uncovered a buried temple said to hold the “Heart of Navigation,” an artifact that could rewrite any path a person’s life would take; but when Arin finally reached it, he learned the island was not lost at all, it was choosing who could leave, and every explorer before him had become part of its living map; in the end, Arin had to decide whether to take the Heart and escape alone or destroy it and remain trapped forever, and as the compass began pointing back toward the sea, he made his choice and stepped into a future no map could ever chart.",
    borderColor: "#acd157"
  }
};

/* Function Button */
function displayStory(genre) {
  if (storyObj[genre]) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

/* My Buttton Active */
scaryStoryBtn.addEventListener('click', () => displayStory('macabre'));
funnyStoryBtn.addEventListener('click', () => displayStory('yarn'));
adventureStoryBtn.addEventListener('click', () => displayStory('adventure'));

scaryStoryBtn.addEventListener('click', displayStory);


