//Type your code here



function onButtonClick()
{
  var d = new Date();
   demo_calendar_Widget=new kony.apps.coe.Reusable.calendarWIDGET(d.getMonth(),d.getFullYear(),"calendarWIDGETNAME","FLXNOSKIN","FLXNOSKIN","BTNMOBNOFOCUS","BTNMOBFOCUS","LBLMOBWEEK","SKNMOBBTNOP100C000000","SKNMOBBTNOP50C000000",onswipecallback,ontouchendcallback,monthRefresh,toatlCalenderRefresh);
  
  frmHome.flxCalendarContainer.add(demo_calendar_Widget.getcalendar());
  //alert(d.getDate());
  selectDate(d);
  //var mnth=parseInt(d.getMonth())+1;
  //showEventsForSelectedDate(d,d.getDate().toString(),mnth.toString(),d.getFullYear().toString());
  
  
}



function onswipecallback(myWidget, gestureInfo, context) 
{

}
function selectDate(slectedDate){
  demo_calendar_Widget.resetTotalcalendarUI();
   var getindex= demo_calendar_Widget.getIndexByDate(slectedDate);
  var data_json={
	"FLEX": {
		"skin": ""
	},
	"IMAGE": {
		"src": "konymp_dps_circle.png",
		"isVisible": true,
      	"TOP":"0%",
      	"left":"0%",
      	"height":"90%"
	},
    "LABEL":{
      "skin":"sknBtnSelectedDate"
    }
    
	};
  	demo_calendar_Widget.setCellStatus(getindex,data_json);
}

function ontouchendcallback(data)
{
 
  //alert(data);
  if(data.LABEL.isMothDay===false)
    return;
  //demo_calendar_Widget.selectDate(data.LABEL.Day);
  var getdate=data.LABEL.Date;
  var mydate= new Date(getdate);
  selectDate(mydate);
 
  
  var mnth=parseInt(mydate.getMonth())+1;
  //alert(typeof(mydate.getDate().toString())+" "+ typeof(mnth.toString()) +" "+mydate.getFullYear().toString());
  showEventsForSelectedDate(mydate,mydate.getDate().toString(),mnth.toString(),mydate.getFullYear().toString());
  //alert(data.IMAGE.src+" isvisible "+data.IMAGE.isVisible);
  //data.IMAGE.src="konymp_dps_circle.png";
 // data.IMAGE.isVisible=true; 
 
}


function monthRefresh(month,year,index)
{
  //alert("month and year and index is "+month+"  "+year+"index is "+index)
}

function toatlCalenderRefresh(month,year)
{
  //alert("The new calender month and year is"+month+" "+year);
}