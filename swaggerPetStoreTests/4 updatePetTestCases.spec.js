const request = require('../commonTests');
const fs = require('fs');
const data = require('../petData.json');

describe("Pet test cases", () => {
    let petDetails = {
        "name": "Scorpius Rex",
        "photoUrls": [
            "https://www.hitc.com/static/uploads/2021/05/Screenshot-1395.png",
            "https://www.hitc.com/static/uploads/2021/05/Screenshot-1392-1536x859.png"
        ],
        "id": data.petId,
        "category": {
            "id": 75946096,
            "name": "E750"
        },
        "tags": [
            {
                "id": 89158051,
                "name": "E750"
            }
        ],
        "status": "Escaped"
    }

    test("update pet in store", async () => {
        const res = await request.request
            .put("/pet")
            .send(petDetails)
            .expect(200);
        expect(res.body).toBeDefined();
        console.log("PUT response body : ", res.body);
        console.log("New pet created with ID : ", res.body.id);
        let jsonContent = JSON.stringify({ petId: res.body.id });
        fs.writeFile("petData.json", jsonContent, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        });                
    })

    
    it("searches for a pet by ID", async () => {
        console.log("Pet to be updated : ", data.petId)
        const res = await request.request
            .get("/pet/"+data.petId)
            .expect(200);
        console.log("GET response body : ", res.body);
        expect(res.body.status).toBe("Escaped");
    })
})