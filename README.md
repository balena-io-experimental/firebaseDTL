# Digital Temperature Logger (DTL)

DTL is a node application that collects data from up to 64 [DS18b20][4] digital temperature sensors connected to the GPIO interface of a [Raspberry Pi][1] and pushes the data in to a [firebase][5] cloud datastore.

## Usage

This is a [resin.io](http://resin.io) supercharged application. Clone it, push
it to your resin endpoint and you're good to go!

## Parts

The recipe for this project is as follows:

* Raspberry Pi with ethernet cable for internet connectivity and
  USB -> micro USB cable for power.
* one or more [DS18b20] digital temperature sensors.
* A breadboard, for example the [AD-102 from Maplin][2].
* Jumper wires to connect everything. For example, these
  [male-to-female connectors from Maplin][3].

## Build Instructions

### Setup

1. Setup an empty [firebase][5]. 
1. Add your firebase url as an environment variable in the resin application dashboard called FIREBASE_URL.
1. Add a second environment variable called INTERVAL_TIME and set its value to the time between sensor measurement, this value is set in seconds and defaults to 600 seconds (10 minutes) if you do not set a time interval.
![Environment Variables](/docs/images/env_vars.png)

### Deploying the code

1. start a new applicaton on resin.io and download the .zip file and extract it to your SD card. 
1. Insert the SD card into the Rasoberry pi, connect the ethernet cable and power it up using the micro-usb cable.
1. After about 10 minutes your new device should show up on the resin.io applications dashboard, you can now clone down the firebaseDTL folder:
'''
$ git clone https://github.com/shaunmulligan/firebaseDTL.git
'''
then add the resin remote: (replacing myUserName and myApplicationName with yours for the resin.io dashboard)
'''
$ git remote add resin git@git.staging.resin.io:<myUserName>/<myApplicationName>.git
'''
and finally push the code to your raspberry pi:
'''
$ git push resin master
'''

### Wiring

**Warning: disconnect the raspberry pi for power before wiring up these parts**

1. Connect up the DS18b20 as shown in the diagram, with pin1 connected to ground (GND), pin2 connected to GPIO4 of the raspberry pi and pin3 connected to 3.3V. 
1. Additionally you will need to connect a resistor between pin2 (the data line) and the 3.3V supply voltage. This resistor can be any value between 4.7KΩ and 10KΩ.
1. Connect the ethernet cable to the raspberry pi and power it up using the micro usb.
Here is a diagram of the circuit:
![Circuit diagram](/docs/images/diagram.png)

### Extending the system

To extend the system to multiple sensors, all you need to do is connect up the additional DS18b20's in parallel to the first one, so they will all share the same 3.3V, ground and data line. Only one resistor is needed in this case.

[1]:http://www.raspberrypi.org/
[2]:http://www.maplin.co.uk/p/ad-102-breadboard-ag10l
[3]:http://www.maplin.co.uk/p/raspberry-pi-compatible-jumper-wires-malefemale-n75de
[4]:http://datasheets.maximintegrated.com/en/ds/DS18B20.pdf
[5]:https://www.firebase.com/