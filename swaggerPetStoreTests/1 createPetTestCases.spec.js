const request = require('../commonTests');
const fs = require('fs');
const data = require('../petData.json');

describe("Pet test cases", () => {

    try {
        let petDetails = {
            "name": "Scorpius Rex",
            "photoUrls": [
                "https://www.hitc.com/static/uploads/2021/05/Screenshot-1395.png",
                "https://www.hitc.com/static/uploads/2021/05/Screenshot-1392-1536x859.png"
            ],
            "id": -43340507,
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
            "status": "Cryogenesis"
        }

        it("adds a new pet to the store", async () => {
            const res = await request.request
                .post("/pet")
                .send(petDetails)
                .expect(200);
            expect(res.body).toBeDefined();
            console.log("POST response body : ", res.body);
            console.log("New pet created with ID : ", res.body.id);
            let jsonContent = JSON.stringify({ petId: res.body.id });
            fs.writeFile("petData.json", jsonContent, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        })
    }

    catch (err) {
        console.log("Exception : ", err)
    }
})