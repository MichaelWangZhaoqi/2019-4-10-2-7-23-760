module.exports = function main(inputs) {
    var dis=inputs['distance'];
	var park=inputs['parkTime'];
	var price;
	
	if(dis<=2){
		price=6+0.25*park;
	}
	
	else if (dis<=8){
		price=6+(dis-2)*0.8+0.25*park;
	}
	
	else
		price=6+4.8+(dis-8)*1.2+0.25*park;
	
	
    return Math.round(price);
};
