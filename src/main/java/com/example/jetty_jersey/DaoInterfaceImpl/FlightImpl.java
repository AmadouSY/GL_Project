package com.example.jetty_jersey.DaoInterfaceImpl;

import java.util.List;

import com.example.jetty_jersey.Dao.Flight;
import com.example.jetty_jersey.DaoInterface.FlightDao;

public class FlightImpl implements FlightDao {

	@Override
	public Flight getFlightbyId(String commercialId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Flight> getFlightsbyAirport(String airport) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Flight> getFlightsbyDepartureAirport(String airport) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Flight> getFlightsbyArrivalAirport(String airport) {
		// TODO Auto-generated method stub
		return null;
	}

}
