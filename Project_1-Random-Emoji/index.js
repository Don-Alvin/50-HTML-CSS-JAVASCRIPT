const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

const getEmoji = async () => {
	let response = await fetch(
		"https://emoji-api.com/emojis?access_key=637d2e496c8a39e2e201a2fd21c1452f14591f7b"
	);

	data = await response.json();

	for (let i = 0; i < 1500; i++) {
		emoji.push({
			emojiName: data[i].character,
			emojiCode: data[i].unicodeName,
		});
	}
};

getEmoji();

btnEl.addEventListener("click", () => {
	const randomNum = Math.floor(Math.random() * emoji.length);
	btnEl.innerText = emoji[randomNum].emojiName;
	emojiNameEl.innerHTML = emoji[randomNum].emojiCode;
});
