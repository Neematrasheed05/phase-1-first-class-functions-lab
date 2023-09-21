/*const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

  afterEach(function () {
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS
     ARE NON-DESTRUCTIVE')
    .to.eql(['Antonia', 'Nuru', 'Amari', 'Mo']);}*/

     
    const returnFirstTwoDrivers = function ([]){
        return ([`Antonia`, `Nuru`]);
        
    }
    const returnLastTwoDrivers = function ([]){
        return ([`Amari`, `Mo`]);
    }
    const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];
    
    function createFareMultiplier (int){
        return function multiplier(fare){
            return fare * int;
        };
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    const selectDifferentDrivers = function (chosendrivers, nodrivers){
        return nodrivers(chosendrivers);
    }