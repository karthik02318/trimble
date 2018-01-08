export interface Ivehicle {
  imagePath:string;
  serialNumber:string;
  vehicleTypeId:number;
  vehicleType:string;
  fuelLevel:number;
  distance:number;
  sapID:string;
  legacyID:number;
  make:string;
  model:string;
  year:string;
  lastReported:string;
  serviceDue:number;
  gpsId:number;
  vehicleOwner:string;
  noDrivers:number;
  chargePerHour:number;
  parkingGarage:string;
  transmission:string;
  numberPlate:string;
  lastTrip:number;
  fuelCost:number;
  laborCost:number;
  odoMeter:number;
  oilLevel:string;
  tierPressureLevel:string;
  idealHours:number;
  usedHours:number;
  renewal:number;
}
