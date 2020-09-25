var FileWriter = {
	counter:0,
	buffLength:0,
	buffer:0,
	output:"",
	push:function(...theArgs) {
		for (let elt of theArgs) {
			this.buffer = this.buffer*2+elt;
			this.buffLength++;
			if (this.buffLength == 8) {
				this.output += String.fromCharCode(this.buffer);
				this.buffer=0;
				this.buffLength=0;
			}
		}
	},
	flush:function(toLeft) {
		if (this.buffLength == 0) return;

		if (toLeft===undefined || toLeft) {
			this.buffer *= 2**(8-this.buffLength);
			this.buffLength = 8;
		}

		this.output += String.fromCharCode(this.buffer);
		this.buffer=0;
		this.buffLength=0;
	},
	download:function() {
		this.flush();
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=US-ASCII;base64,' + encodeURIComponent(btoa(this.output)));
		element.setAttribute('download', width+"x"+height+".maz");

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
		console.log(this.output);
	}
}
/*
var writer = Object.create(FileWriter);
for (let elt of "01001000011001010110110001101100011011110010110000100000010101110110111101110010011011000110010000100001") {
	writer.push(parseInt(elt, 2));
}
writer.download();
*/
