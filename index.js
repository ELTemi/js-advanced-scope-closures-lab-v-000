function produceDrivingRange(distance) {
  return function (block1, block2) {
    let outOfRange = parseInt(block2) - parseInt(block1) > distance
    if (outOfRange === true) {
      return parseInt(block2) - parseInt(block1) - distance + " blocks out of range"
    } else {
      return `within range by ${distance - (parseInt(block2) - parseInt(block1))}`
    }
  }
}

function produceTipCalculator(tip) {
  return function (fare) {
    return fare * tip
  }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
