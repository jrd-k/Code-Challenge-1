function calculateChaiIngredients(numberOfCups){
    //ingridient ratio for one cup of chai
   const waterpercup=200;//ml
   const milkpercup=50;//ml
   const tealeavespercup=1;//tablespoon
   const sugarpercup=2;//teaspoons
    //total ingridients used as per the given order
   const totalwater=numberOfCups*waterpercup;//ml
   const totalmilk=numberOfCups*milkpercup;//ml
   const totaltealeaves=numberOfCups*tealeavespercup;//tablespoon*s
   const totalsugar=numberOfCups*sugarpercup;//teeaspoons
   //output
   console.log(`To make ${numberOfCups} cup of kenyan chai you will need: `);
   console.log(`water${totalwater} ml`);
   console.log(`milk${totalmilk} ml`);
   console.log(`tea leaves(majani)${totaltealeaves}tablespoon${totaltealeaves >1 ? 's':''}`);
   console.log(`sugar(sukari)${totalsugar}teaspoon${totalsugar >1 ?'s':''}`);
}
   //user interface prompt & input
const input=prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

if(!NaN(numberOfCups) && numberOfCups>0){
    calculateChaiIngredients(numberOfCups)
}
else{
    console.log("please enter a valid number of cups")
}

