//Type your code here
evntsWidgetArry=[];
function createFlex(myTop,eventTitle,myheight){
 // alert(" myTop "+myTop+" eventTitle "+eventTitle+" myheight "+myheight);
  flxContainer = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": (myheight-2)+"dp",
        "id": "flx"+eventId,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "17%",
        "skin": "sknFlxLightBlue",
        "top": (myTop+1)+"dp",
        "width": "84%",
        "zIndex": 1
    }, {}, {});
    flxContainer.setDefaultUnit(kony.flex.DP);
     Label0fd8095d1e1004e = new kony.ui.Label({
        "height": "100%",
        "id": "lbl"+eventId,
        "isVisible": true,
        "left": "5dp",
        "skin": "sknEventTitle",
        "text": eventTitle,
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxContainer.add(Label0fd8095d1e1004e);
   return flxContainer;
}
function resetAll()
{
  for (var i=0;i<=evntsWidgetArry.length;i++){
    frmHome.FlexScrollContainer0cefab937862341.remove(evntsWidgetArry[i]);
  }
  evntsWidgetArry = [];
}
function getTop(startTime){
    
  var hrPersent =50;
  var top=0;
  var times = startTime.split(" ");
  var hrs = times[0].split(":");
  var hrCount = Number(hrs[0]);
  var minCount = Number(hrs[1]);
  
  if(times[1]==="AM" ){
    if(hrs[0]==="12"){
      hrCount=0;
    }
      hrCount +=0;
           
  }else if(times[1]==="PM"){
    if(hrs[0]==="12"){
          	hrCount +=0;
         	}else{
      		hrCount += 12;
    	}
    
    }    
  top = (hrCount * hrPersent);  
  top += (minCount/60) * 50 ;  
  top += 10;
  
  return top;
}
function getHeight(eventTime){
   var evntHeight=50;
  
  return ((eventTime/60)*evntHeight);
  
}
function convertToDatable(wrongFormat){
	var times = wrongFormat.split(" ");
	var dates = times[0].split("/");

	return dates[2]+"-"+dates[1]+"-"+dates[0]+" "+times[1]+" "+times[2];
} 
function showEventsForSelectedDate(mydate,date,mnth,year){
  
  resetAll(); 
  var selectedDate = [date,mnth,year];

  var returnedArr = NativeCalendar.konyGetCalEventsFor(selectedDate);
  if (returnedArr == null){
   alert("No Events Scheduled for selected Date"); 
    return; 
  }
  for(ind=0;ind<returnedArr.length;ind++){
	var eventTitle = returnedArr[ind][0]; //Title is returned at index 0
		 eventId = returnedArr[ind][1];  //Event id is at index 1
    var eventStartTimeStr = returnedArr[ind][2];  //Event start time is at index 2
    var eventStartTime = eventStartTimeStr.split(" ")[1];
    var ampmStr = eventStartTimeStr.split(" ")[2];
    var eventStartTimeHrMinPart = eventStartTime.split(":")[0]+":"+eventStartTime.split(":")[1]+" "+ampmStr;
    
    var eventEndTimeStr = returnedArr[ind][3];//Event end time is at index 3
    var eventEndTime = eventEndTimeStr.split(" ")[1];
    ampmStr = eventEndTimeStr.split(" ")[2];
    var eventEndTimeHrMinPart = eventEndTime.split(":")[0]+":"+eventEndTime.split(":")[1]+" "+ampmStr;

    var eventLocation = returnedArr[ind][4]; //Event location is at index 4 
    
    var getstrtDate = convertToDatable(eventStartTimeStr);
    var strtDate = new Date(getstrtDate);
    
    var getendDate=convertToDatable(eventEndTimeStr);
    var endDate = new Date(getendDate);
    
    //alert("EH :"+endDate.getHours()+" - SH : "+strtDate.getHours());
    //var hrDiff =Math.abs(endDate.getHours() - strtDate.getHours());
    //hrDiff *= 60; 
    
    //alert("EM :"+endDate.getMinutes()+" - SM : "+strtDate.getMinutes());
    //var minDiff = Math.abs(endDate.getMinutes() - strtDate.getMinutes());
    
    //var timediff= Number(hrDiff) + Number(minDiff);
    var timeDiff=endDate-strtDate;
    var totalMinute=timeDiff/1000/60;
    var top=getTop(eventStartTimeHrMinPart);
   // var bottom=getTop(eventEndTimeHrMinPart);
    var flx=createFlex(top,eventTitle,getHeight(totalMinute));
    frmHome.FlexScrollContainer0cefab937862341.add(flx);
    evntsWidgetArry.push(flx);
    
  }
  
  
}
