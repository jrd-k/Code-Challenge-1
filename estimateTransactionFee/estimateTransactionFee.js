function estimateTransactionFee(amountToSend){
    //initial operations
    const transactionfee=amountToSend*.015;
    const maxfee=(70);
    const minfee=(10);
    const transactionFee = Math.min(Math.max(rawFee, minFee), maxFee);

    //output
    console.log(`Sending KES${amountToSend}:`);
    console.log(`Calculated Transaction Fee:KES${transactionfee}`);
    console.log(`Total amount to be debited:KES${amountToSend+transactionfee}`);

    console.log("Send Money Securely!")
}

//user interface and prompt
const input=prompt("Unatuma Ngapi? (KES):");
const amountToSend=Number(input);

//validation
if(!isNaN(amountToSend) && amountToSend>0 ){
    estimateTransactionFee(amountToSend);
}
else{
    console.log("Please entre a valid amount")
}