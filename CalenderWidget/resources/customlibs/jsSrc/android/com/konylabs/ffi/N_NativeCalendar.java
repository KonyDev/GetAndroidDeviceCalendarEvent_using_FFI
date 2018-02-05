package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.sampleapps.NativeCalendarLib;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_NativeCalendar extends JSLibrary {

 
 
	public static final String konyGetCalEvents = "konyGetCalEvents";
 
 
	public static final String konyGetCalEventsFor = "konyGetCalEventsFor";
 
	String[] methods = { konyGetCalEvents, konyGetCalEventsFor };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public N_NativeCalendar(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.konyGetCalEvents( );
 
 			break;
 		case 1:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 com.konylabs.vm.LuaTable datecomponents1 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 datecomponents1 = (com.konylabs.vm.LuaTable)params[0];
 }
 ret = this.konyGetCalEventsFor( datecomponents1 );
 
 			break;
 		default:
			break;
		}
 
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "NativeCalendar";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] konyGetCalEvents( ){
 
		Object[] ret = null;
 java.util.Vector retval = com.kony.sampleapps.NativeCalendarLib.getAllEvents( );
 LuaTable val = TableLib.convertToLuaTable(retval);
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] konyGetCalEventsFor( com.konylabs.vm.LuaTable inputKey0 ){
 
		Object[] ret = null;
 java.util.Vector retval = com.kony.sampleapps.NativeCalendarLib.getEventsFor( (java.util.Vector)TableLib.convertToList(inputKey0)
 );
 LuaTable val = TableLib.convertToLuaTable(retval);
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
};
