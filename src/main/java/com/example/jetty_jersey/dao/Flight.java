package com.example.jetty_jersey.dao;

import java.util.Date;

import com.example.jetty_jersey.db.Utility;

/*
PUT flight/id
 {
 "comercialid" : "exmaple of comercial id"
 "departureairport" : "example of departure airport"
 "arrivalairport" : "example of arrival airport"
 "departuretime" : "example of departure time"
 "arrivaltime" : "example of arrival time"
 }
*/

public class Flight
{

	private final int id;
	private String commercialId;
	private String departureAirport;
	private String arrivalAirport;
	private Date departureTime;
	private Date arrivalTime;
	private int planeId;

	public Flight(int id, String commercialId, String departureAirport, String arrivalAirport, Date departureTime, Date arrivalTime, int planeId)
	{
		this.id = id;
		this.commercialId = commercialId;
		this.departureAirport = departureAirport;
		this.arrivalAirport = arrivalAirport;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.planeId = planeId;
	}

	public Flight(int id, int planeId)
	{
		this.id = id;
		this.commercialId = "commercialId" + id;
		this.departureAirport = "Dairport" + id;
		this.arrivalAirport = "Aairport" + id;
		this.departureTime = new Date();
		this.arrivalTime = new Date();
		this.planeId = planeId;
	}

	public int getId()
	{
		return id;
	}

	public int getPlaneId()
	{
		return planeId;
	}

	public void setPlaneId(int planeId)
	{
		this.planeId = planeId;
	}

	public String getCommercialId()
	{
		return commercialId;
	}

	public void setCommercialId(String commercialId)
	{
		this.commercialId = commercialId;
	}

	public String getDepartureAirport()
	{
		return departureAirport;
	}

	public void setDepartureAirport(String departureAirport)
	{
		this.departureAirport = departureAirport;
	}

	public String getArrivalAirport()
	{
		return arrivalAirport;
	}

	public void setArrivalAirport(String arrivalAirport)
	{
		this.arrivalAirport = arrivalAirport;
	}

	public Date getDepartureTime()
	{
		return departureTime;
	}

	public void setDepartureTime(Date departureTime)
	{
		this.departureTime = departureTime;
	}

	public Date getArrivalTime()
	{
		return arrivalTime;
	}

	public void setArrivalTime(Date arrivalTime)
	{
		this.arrivalTime = arrivalTime;
	}

	@Override
	public String toString()
	{
		return "Flight(" + id + "," + commercialId + "," + departureAirport + "," + arrivalAirport + "," + Utility.convertDateToString(departureTime) + "," + Utility.convertDateToString(arrivalTime)
				+ "," + planeId + ")";
	}

}
