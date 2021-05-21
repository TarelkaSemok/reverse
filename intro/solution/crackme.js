//frida -U --no-pause -l crackme.js -f example.com.crackme

function bArrToStr(arr) {
	var buffer = Java.array('byte', arr);
	var result = "";
	for(var i = 0; i < buffer.length; ++i){
		result+= (String.fromCharCode(buffer[i]));
	}
	return result;	
}

Java.perform(function(){

	Java.use("example.com.crackme.i").checkKey.implementation = function (s, c) {
		console.log("checkKey hit");
		var my_key = Java.array('byte', [0xb2, 0x2a, 0x4c, 0x2d,
						 0x51, 0x6e, 0x25, 0x34,
						 0x53, 0xb3, 0x4f, 0xc4,
						 0x9d, 0x5e, 0xda, 0x31
						 ]);
		var my_cipher = Java.array('byte', [0x40, 0x76, 0xa5, 0x5a, 0x07, 0xef, 0x8e, 0x76,
						    0xcf, 0x1f, 0xd8, 0xba, 0xf0, 0x2a, 0xbc, 0x7f,
						    0x22, 0xbe, 0xb6, 0x9a, 0x7a, 0x7d, 0xed, 0x21,
						    0x45, 0x47, 0x70, 0xfa, 0x24, 0x13, 0xa6, 0x76
						    ]);
		var my_text = this.iiiilll(my_key, my_cipher);
		if(s == Java.use("java.lang.String").$new(my_text)) {
			return Java.use("example.com.crackme.i$Status").KEY_GOOD.value;
		}
		else {
			return Java.use("example.com.crackme.i$Status").KEY_INVALID.value;
		}
	}
		
	Java.use("example.com.crackme.i").iiiilll.implementation = function (a1, a2) {
		console.log("Crypto hit");
		const retval = this.iiiilll(a1, a2);
		console.log("Key: " + bArrToStr(a1) + ", encoded: " + bArrToStr(a2));
		console.log("Decoded: " + bArrToStr(retval));
		var key 
		return retval;
	}
	
});
