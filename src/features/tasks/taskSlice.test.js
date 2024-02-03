import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { getTasks } from "./taskSlice";
import taskService from "./taskService";

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

describe("taskSlice", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      task: {
        tasks: [],
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: "",
      },
      auth: {
        user: { token: "mock_token" },
      },
    });
  });
  afterEach(() => {
    mock.reset();
    store.clearActions();
  });
  test("calls the taskService to fetch tasks", async () => {
    const token = "mock_token"
    const tasks = [
        {
            _id: "65bd36fc384e9456575f3568",
            test:"Learn Tailwind",
            user: "65b5bbdb064c2bebc053be31",
            createdAt: "2024-02-02T18:39:56.565+00:00",
            updatedAt:"2024-02-02T18:39:56.565+00:00",
            __v:0
        }
    ]
    const getTasksSpy = jest.spyOn(taskService, "getTasks").mockResolvedValue(tasks);
    await store.dispatch(getTasks())
    expect(getTasksSpy).toHaveBeenCalledWith(token)
})
});

