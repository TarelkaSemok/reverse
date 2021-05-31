// frida injection script
// hooks ssl channel and reads all plain text packets

Java.perform(function() {
	Java.use("org.cocos2dx.javascript.AppActivity").showSplash.implementation = function() {
		
		Interceptor.attach(Module.findExportByName('libcocos2djs.so', 'SSL_write'), {
			onEnter: function(args) {
				this.ssl_struct = args[0];
				this.ssl_write  = args[1].readByteArray(args[2].toInt32());
				send('ssl_write', this.ssl_write);
			},
		});
		
		Interceptor.attach(Module.findExportByName('libcocos2djs.so', 'SSL_read'), {
			onEnter: function(args) {
				this.buf_ptr = args[1];
				this.buf_len = args[2].toInt32();
			},
			onLeave: function(retval) {
				this.buf_len  = (retval.toInt32() != -1)? retval.toInt32() : this.buf_len;
				this.ssl_read = this.buf_ptr.readByteArray(this.buf_len);
				send('ssl_read', this.ssl_read);
			}
		});
		this.showSplash();
	}
});
