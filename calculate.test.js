const calculateBonus = require("./calculate");
describe ("function of calculateBonus", ()=>{
    test ("output of bonus calculation",() =>{
        expect(calculateBonus(40,20)).toBe(50);
        expect(calculateBonus(20,15)).toBe(35);

    });


    test ("comparing values of bonus with values must be return",() =>{
        expect(calculateBonus(40,20)).toBeGreaterThan(49);
        expect(calculateBonus(20,15)).toBeLessThanOrEqual(50);

    });


    test ("calculetbonus equal = 0",() =>{
        expect(calculateBonus(10,25)).not.toBe(0);
        
    });

    test ("calculetbonus equal is not eqauel 0",() =>{
        expect(calculateBonus(0,0)).toBe(0);
        
    });


    test ("calculetbonus with float numbers",() =>{
        expect(calculateBonus(10.5,12.37)).toBeCloseTo(22.87);
        expect(calculateBonus(40.82,12.5)).toBe(50);

    });

    describe ("test of object assigment", ()=>{
    test ("object assignment",() =>{
        const data = {one: 20}; 
        data["two"]=5;
        expect(data).toEqual({one: 20, two: 5});
   
});
})
})
