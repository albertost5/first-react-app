
export function calculateTotal( quantity, months ) {
    // 0 - 1000: 25%
    // 1001 - 5000: 20%
    // 5001 - 10000: 15%
    // >10000: 10%

    let totalToPay;
    
    if( quantity <= 1000 ) {
        totalToPay = quantity * 1.25;
    } else if ( quantity > 1000 && quantity <= 5000 ) {
        totalToPay = quantity * 1.2;
    } else if ( quantity > 5000 && quantity <= 10000 ) {
        totalToPay = quantity * 1.15;
    } else if ( quantity > 10000 ) {
       totalToPay = quantity * 1.1; 
    }

    console.log(totalToPay);

    // 3M: 5%
    // 6M: 10%
    // 12: 15%
    // 24: 20%

    switch (months) {
        case 3:
            totalToPay = totalToPay * 1.05;
            break;
        case 6:
            totalToPay = totalToPay * 1.1;
            break;
        case 12:
            totalToPay = totalToPay * 1.15;
            break;
        case 24:
            totalToPay = totalToPay * 1.2;
            break;
        default:
            break;
    }

    return totalToPay;
}