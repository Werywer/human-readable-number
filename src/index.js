module.exports = function toReadable (number) {
   if(number == 0) return 'zero';
   let arr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
   'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
   if(number > 0 && number < 20) return arr1[number - 1];
   arr2 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
   if(number > 19 && number < 100) {
       if(number % 10 == 0) {
           number /= 10;
           return arr2[number - 1];          
       }
       else {
           let temp = number;
           temp /= 10;
           temp = Math.trunc(temp);
           let temp2 = number - temp*10;
           return `${arr2[temp - 1]} ${arr1[temp2 - 1]}`;
        }  
    }
    if(number > 99 && number < 1000) {
        if(number % 100 == 0) return `${arr1[number/100 - 1]} hundred`;
        else if(number % 10 == 0) {
            let temp = number;
            temp /= 100;
            temp = Math.trunc(temp);
            let temp2 = number - temp*100;
            temp2 /= 10;
            return `${arr1[temp - 1]} hundred ${arr2[temp2 - 1]}`;           
        }
        else if(Math.trunc(number / 10) % 10 == 0)
        {
            let temp1 = number;
            temp1 = Math.trunc(temp1 / 100);
            let temp2 = number - temp1*100;
            return `${arr1[temp1 - 1]} hundred ${arr1[temp2 - 1]}`;            
        }
        else{
            let temp1 = number;
            temp1 = Math.trunc(temp1 / 100);
            let temp2 = number - temp1 * 100;
            temp2 = Math.trunc(temp2 / 10);
            temp3 = number - temp1*100 - temp2*10;
            if(number - temp1 * 100 < 20)
            {
                return `${arr1[temp1 - 1]} hundred ${arr1[number - temp1 * 100 - 1]}`;
            }
            return `${arr1[temp1 - 1]} hundred ${arr2[temp2 - 1]} ${arr1[temp3 - 1]}`;
        }
    }
}
