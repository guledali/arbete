import { place_order, testLog } from '../src/index'

describe('testing place_order', function() {
    it('If the supplier does not exists', () => {
        expect.assertions(2);
        
        try {
            place_order("23123131", "!2312312");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'FAIL NO_SUPPLIER');
        }
    }); 
    
    it('If the product does not exists', () => {
        expect.assertions(2);
        
        try {
            place_order("12ffgd", "!2312312");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'FAIL NO Products');
        }
    });
    
    //  it('If the supplier and product exists return OK status, all product names', () => {
    //         place_order("12ffgd", "123abc")
    //         let data = ["OK", "appleTv", "chicken", "orange"]
    //         expect(testLog).toEqual(data)
    //  });
     
     
});