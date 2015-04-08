var sensor = require('ds18x20');
var moment = require('moment');
var FirebaseClient = require('firebase-client');
var intervalTime = process.env.INTERVAL_TIME || 600;
var firebaseURL = process.env.FIREBASE_URL;
var deviceName = process.env.RESIN_DEVICE_UUID;

var firebase = new FirebaseClient({url: firebaseURL});

sensor.list(function (err, listOfDeviceIds) {
    console.log('Available Sensors: '+listOfDeviceIds);
    push2Firebase();
	setInterval( function() {
		push2Firebase();
	}, intervalTime*1000);
});
		
function push2Firebase() {
	//reads all temp sensors and uploads to firebase
	var resource = getSampleURL(deviceName);
	sensor.getAll(function (err, tempObj) {
		firebase.set(resource, { temp: tempObj, time: moment() })
		.then(function(body){
		  console.log(body); 
		})
		.fail(function(err){
		  console.log(err);
		});
	});	
}

function getSampleURL(device) {
	var year = moment().year();
	var day = moment().dayOfYear();
	var sampleNumber = Math.floor((moment().minute() + moment().hour()*60)/(intervalTime/60))+1;
	var url = device+'/'+year+'/'+day+'/'+sampleNumber;
	console.log('writing to data to: '+url);
	return url;
}
