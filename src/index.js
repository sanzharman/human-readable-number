module.exports = function toReadable(number) {
    const units = [
        'zero', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    
    const hundreds = [
        '', 'one hundred', 'two hundred', 'three hundred', 
        'four hundred', 'five hundred', 'six hundred', 
        'seven hundred', 'eight hundred', 'nine hundred'
    ];

    if (number < 10) {
        return units[number];
    }
    
    if (number >= 10 && number < 20) {
        return teens[number - 10];
    }
    
    if (number >= 20 && number < 100) {
        const tenPart = Math.floor(number / 10);
        const unitPart = number % 10;
        return unitPart === 0 ? tens[tenPart] : `${tens[tenPart]} ${units[unitPart]}`;
    }
    
    if (number >= 100 && number < 1000) {
        const hundredPart = Math.floor(number / 100);
        const remainder = number % 100;
        
        if (remainder === 0) {
            return hundreds[hundredPart];
        } else if (remainder < 10) {
            return `${hundreds[hundredPart]} ${units[remainder]}`;
        } else if (remainder < 20) {
            return `${hundreds[hundredPart]} ${teens[remainder - 10]}`;
        } else {
            const tenPart = Math.floor(remainder / 10);
            const unitPart = remainder % 10;
            return unitPart === 0 ? 
                `${hundreds[hundredPart]} ${tens[tenPart]}` : 
                `${hundreds[hundredPart]} ${tens[tenPart]} ${units[unitPart]}`;
        }
    }
}
