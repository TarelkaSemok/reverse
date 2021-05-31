#python code
import frida
import time
import sys

f = open('py_log.txt', 'bw')  

def on_message(message, data):
    #print(message['payload'])
    f.write(data)

device = frida.get_usb_device()
pid = device.spawn(["com.kpgame.PokerBros"])
time.sleep(1)
session = device.attach(pid)
script = session.create_script(open("inject.js").read())
script.on('message', on_message)
script.load()
device.resume(pid)
sys.stdin.read()
