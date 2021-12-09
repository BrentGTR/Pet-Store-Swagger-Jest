const request = require('../commonTests');

describe("User test cases", () => {

    try {
        let userDetails;
        beforeEach(function () {
            userDetails = {
                "id": 47021968,
                "username": "wuh",
                "firstName": "henry",
                "lastName": "wu",
                "email": "wuh@ingen.com",
                "password": "Indominus",
                "phone": "dolore pariatur",
                "userStatus": -87660317
            }
        })

        it("creates a new user", async () => {
            const res = await request.request
                .post("/user")
                .send(userDetails)
                .expect(200);
            expect(res.body).toBeDefined();
            expect(userDetails.id.toString()).toBe(res.body.message)
            console.log("POST response body : ", res.body);
            console.log("New user created with ID : ", res.body.message);               
        })  
        
        test("log into store", async () => {
            const res = await request.request
                .get("/user/login?username="+userDetails.username+"&password="+userDetails.password)
                .expect(200);
            console.log("GET response body : ", res.body);
            expect(res.body.message).toContain("logged in user session:");
        })
    }    
        
    catch (err) {
            console.log("Exception : ", err)
        }
    })