
//f28l[7] = "java.lang.String"
//f28l[8] = "android.content.Context"
//f28l[9] = "getResources"
public static Status checkKey(String key, Context context) {
	try {
		Class String = Class.forName(new String(f28l[7]));
		Class Context = Class.forName(new String(f28l[8]));
		try {
			if ($assertionsDisabled || Context != null) {
				Method getRes = Context.getDeclaredMethod(new String(f28l[9]), new Class[0]);
				TelephonyManager TelMng = (TelephonyManager) context.getSystemService("phone");
				try {
					if (!$assertionsDisabled && String == null) {
						throw new AssertionError();
					} else if ($assertionsDisabled || getRes != null) {
						Method length = String.getDeclaredMethod(Character.toString(((Resources) getRes.invoke(context, new Object[0])).getString(C0329R.string.good).charAt(9)) + new String(f28l[6]), new Class[0]);
						try {
							Method equals = String.getDeclaredMethod(new String(f28l[15]), Object.class);
							try {
								Class System = Class.forName(new String(f28l[12]));
								Class TelephonyManager = Class.forName(new String(f28l[13]));
								try {
									if (!$assertionsDisabled && TelephonyManager == null) {
										throw new AssertionError();
									} else if ($assertionsDisabled || System != null) {
										Method getDeviceId = TelephonyManager.getDeclaredMethod(new String(f28l[17]), new Class[0]);
										Method exit = System.getDeclaredMethod(new String(f28l[14]), Integer.TYPE);
										try {
											if (((Boolean) equals.invoke(getDeviceId.invoke(TelMng, new Object[0]), new String(f28l[11]))).booleanValue()) {
												exit.invoke(System, 0);
											}
											try {
												if ($assertionsDisabled || length != null) {
													if (!((Boolean) equals.invoke(Integer.toString(((Integer) length.invoke(key.replaceAll("-", "").toLowerCase(Locale.UK), new Object[0])).intValue()), Integer.toString(f28l[4][2]))).booleanValue()) {
														return Status.KEY_INVALID;
													}
													try {
														byte[] hash1 = Arrays.copyOf(MessageDigest.getInstance(new String(f28l[10])).digest(new byte[]{getbyte(123, f28l[5][0], f28l[0][2], f28l[0][1]), 2, getbyte(321, f28l[0][1], f28l[5][0], f28l[0][2])}), (int) f28l[4][2]);
														byte[] secret = new byte[(f28l[1].length + f28l[3].length)];
														System.arraycopy(f28l[1], 0, secret, 0, f28l[1].length);
														System.arraycopy(f28l[3], 0, secret, f28l[1].length, f28l[3].length);
														byte[] secret1 = new byte[(secret.length + 12)];
														System.arraycopy(secret, 0, secret1, 0, secret.length);
														System.arraycopy(new byte[]{122, 125, -19, 33, 69, 71, 112, -6, 36, 19, -90, 118}, 0, secret1, secret.length, 12);
														if (((Boolean) equals.invoke(key.replaceAll("-", "").toLowerCase(Locale.UK), new String(encode(hash1, secret1)))).booleanValue()) {
															return Status.KEY_GOOD;
														}
														return Status.KEY_INVALID;
													} catch (NumberFormatException e) {
														return Status.KEY_INVALID;
													} catch (Exception e2) {
														return Status.KEY_GOOD;
													}
												} else {
													throw new AssertionError();
												}
											} catch (IllegalAccessException | InvocationTargetException e3) {
												return Status.KEY_INVALID;
											}
										} catch (IllegalAccessException | InvocationTargetException e4) {
											return Status.KEY_INVALID;
										}
									} else {
										throw new AssertionError();
									}
								} catch (NoSuchMethodException e5) {
									return Status.KEY_INVALID;
								}
							} catch (ClassNotFoundException e6) {
								return Status.KEY_INVALID;
							}
						} catch (NoSuchMethodException e7) {
							return Status.KEY_INVALID;
						}
					} else {
						throw new AssertionError();
					}
				} catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException e8) {
					return Status.KEY_INVALID;
				}
			} else {
				throw new AssertionError();
			}
		} catch (NoSuchMethodException e9) {
			return Status.KEY_INVALID;
		}
	} catch (ClassNotFoundException e10) {
		return Status.KEY_INVALID;
	}
}

private static byte[] encode(byte[] key, byte[] secret) throws Exception {
	SecretKeySpec aes_key = new SecretKeySpec(key, "AES");
	Cipher ciph = Cipher.getInstance("AES");
	ciph.init(2, aes_key);
	return ciph.doFinal(secret);
}


