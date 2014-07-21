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


### Wiring

1. Connect up the DS18b20 as shown in the diagram, with pin1 connected to ground (GND), pin2 connected to GPIO4 of the raspberry pi and pin3 connected to 3.3V. Additionally you will need to connect a resistor between pin2 (the data line) and the 3.3V supply voltage. This resistor can be any value between 4.7KΩ and 10KΩ.
1. Connect the ethernet cable to the raspberry pi and power it up using the micro usb.
Here is a diagram of the circuit:
![Circuit diagram](/docs/images/diagram.jpg)

[1]:http://www.raspberrypi.org/
[2]:http://www.maplin.co.uk/p/ad-102-breadboard-ag10l
[3]:http://www.maplin.co.uk/p/raspberry-pi-compatible-jumper-wires-malefemale-n75de
[4]:http://datasheets.maximintegrated.com/en/ds/DS18B20.pdf
[5]:https://www.firebase.com/