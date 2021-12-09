const request = require('../commonTests');

describe("Store orders test cases", () => {

    try {
        let orderDetails;
        beforeEach(function () {
            orderDetails = {
                "id": -78328474,
                "petId": 9223372036854775807,
                "quantity": 2,
                "shipDate": "1987-10-02T12:35:22.657Z",
                "status": "approved",
                "complete": false
            }
        })

        it("adds a new purchase order for a pet", async () => {
            const res = await request.request
                .post("/store/order")
                .send(orderDetails)
                .expect(200);
            expect(res.body).toBeDefined();
            expect(res.body.quantity).toBe(2);
            console.log("POST response body : ", res.body);
            console.log("New order created with ID : ", res.body.id);               
        })  
    }    
        
    catch (err) {
            console.log("Exception : ", err)
        }
    
})