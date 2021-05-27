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
		
		try {												// ok
			var c_string = Java.use("java.lang.String");
			console.log("String class loaded: " + c_string);
		}catch(e){
			console.log("Exception in String class: " + e);
		}

		try {												// ok
			var c_context = Java.use("android.content.Context");
			console.log("Context class loaded: " + c_context);
		}catch(e){
			console.log("Exception in Context class: " + e);
		}
		
		try {												// ok
			var tel_mng = c.getSystemService("phone");
			console.log("getSystemService success: " + tel_mng);
		}catch(e){
			console.log("Exception in getSystemService: " + e);
		}
		
		try {												// ok
			var res = c.getResources();
			console.log("getResources success: " + res);
		}catch(e){
			console.log("Exception in getResources: " + e);
		}
				
		try {												// ok
			var c_TelMng = Java.use("android.telephony.TelephonyManager");
			console.log("TelephonyManager class loaded: " + c_TelMng);
		}catch(e){
			console.log("Exception in TelephonyManager class: " + e);
		}
		
		try {												// NOT ok
			var imei = Java.cast(tel_mng, c_TelMng).getDeviceId();
			console.log("getDeviceId success: " + imei);
		} catch(e) {
			console.log("getDeviceId fail: " + e);
		}
	
	// Java.use("android.content.Context").$new().getSystemService("phone");
/*		console.log("checkKey hit");
		console.log("-----parse of const array--------");
		console.log(bArrToStr(this.l.value[7]));
		console.log(bArrToStr(this.l.value[8]));
		console.log(bArrToStr(this.l.value[9]));
		console.log(bArrToStr(this.l.value[6]));
		console.log(bArrToStr(this.l.value[15]));
		console.log(bArrToStr(this.l.value[12]));
		console.log(bArrToStr(this.l.value[13]));
		console.log(bArrToStr(this.l.value[17]));
		console.log(bArrToStr(this.l.value[14]));
		console.log(bArrToStr(this.l.value[11]));
		console.log(bArrToStr(this.l.value[10]));
		var buffer = Java.array('byte', this.l.value[4]);
		console.log("length of secret " + buffer[2]);
		console.log("-----parse of const array--------");
*/		
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
