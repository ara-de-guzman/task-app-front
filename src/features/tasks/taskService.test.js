import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import taskService from "./taskService";

const mock = new MockAdapter(axios);

describe("taskService", ()=> {
    afterEach(() => {
        mock.reset();
    });
    test ("fetches tasks successfully",async () => {
        const token = "mock token";
        const tasks = [ {
            _id:"65bd36fc384e9456575f3568",
            text:"Learn Tailwind",
            user:"65b5bbdb064c2bebc053be31",
            createdAt: "2024-02-02T18:39:56.565+00:00",
            updatedAt: "24-02-02T18:39:56.565+00:00",
            __v:0
        }]
        mock.onGet('https://taskbackend-yqw0nfw1.b4a.run/api/tasks/', {
        headers : {
              Authorization: `Bearer ${token}` }}).reply(200,tasks)
              const response = await taskService.getTasks(token)
              expect(response).toEqual(tasks)
    })
})