textNodes = [];
function randomChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
};

function grabTexts(root) {
	if (root.nodeType == 3) textNodes.push(root);
	var c = root.childNodes;
	Array.prototype.forEach.call(c, grabTexts);
}

function check(st) {
	containsChar = false;
	for (i =0 ; i < st.length; i++) {
		var ascii = st[i].charCodeAt(0);
		if ((ascii >= 97 && ascii <= 122) ||
			(ascii >= 65 && ascii <= 90) ||
			(ascii >= 48 && ascii <= 57))
			containsChar = true;
	}
	return containsChar;
}

// Takes in string // Returns String
// Quotes random super-four-letter word in string
function quoteRandom(st) {
	var arr = st.split(" ");
	var i = 0;
	for (var j = 0; j < 1000; j++) {
		i = Math.floor(Math.random() * arr.length);
		if (arr[i].length > 4
			&& arr[i][0] != "\"" && arr[i][arr[i].length - 1] != "\"") {

			arr[i] = "\"" + arr[i]  +"\"";
			return arr.join(" ");
		}

	}
}

function quote_once(textNodes) {
	t = randomChoice(textNodes);
	var ret = quoteRandom(t.textContent);
	if (ret != undefined ) {
		t.textContent = ret;
	}

}

function main() {

	grabTexts(document);

	var filtered_text = textNodes.filter(function (e) {
		return check(e.textContent);
		});

	for(var i= 0; i < 100; i++) {
		quote_once(filtered_text);
	}
}

main()
