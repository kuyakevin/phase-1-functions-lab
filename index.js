// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let blocks = Math.abs(distance-42);
    return blocks
}

function distanceFromHqInFeet(distance) {
    let feet = distanceFromHqInBlocks(distance) * 264;
    return feet
}

function distanceTravelledInFeet(distance1, distance2) {
    let feetTraveled = Math.abs((distance2 - distance1)) * 264;
    return feetTraveled
}

function calculatesFarePrice(start, destination) {
    let cost;
    let block = Math.abs(destination - start);
    if (block > 0 && block <= 1) {
        return cost = 0
    } 
    let fareDistance = block * 264 ;
    if (fareDistance > 400 && fareDistance <= 2000) {
        cost = (fareDistance - 400) * 0.02;
        return cost
    } else if (fareDistance > 2000 && fareDistance <= 2500) {
        return cost = 25
    } else if (fareDistance > 2500) {
        return 'cannot travel that far'
    }
}