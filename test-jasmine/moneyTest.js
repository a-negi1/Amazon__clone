import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite : formatCurrency',() => {
    it('converts paise into rupees' , () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual(0);
    });

    it('round up to neareast paise',()=>{
        expect(formatCurrency(2000.5)).toEqual(20.01);
    });

});

