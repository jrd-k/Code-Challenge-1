function bodaFareCalculator(distanceInKm){
 //stipulated charges for distance travelled
 const baseFare = 50;//KES
 const chargesPerKm = 15;//KES

//calculation of totalcharge for the ride(basecharge+perkilometercharge)
const fare1 = distanceInKm * chargesPerKm;
const totalFare = baseFare + fare1;

//output
console.log(`Uko Kwote? Io ni ${distanceInKm}km`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko:KES${fare1}`);
  console.log(`Total:KES${totalFare}`);

  console.log("Panda Pikipiki");
}

//userinterface prompt & input
const input=prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKm=Number(input);

 //validation
if(!isNaN(distanceInKm) && distanceInKm>0){
  bodaFareCalculator(distanceInKm);
}
else{
    console.log("Enter a valid number!")
}