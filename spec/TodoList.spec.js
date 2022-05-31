const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }]
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("get all items in the object", () => {
    const todoList = new TodoList()
    todoList.create("turn the heating on!")
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }]
    const result = todoList.getAllItems()
    expect(result).toEqual(expected)
  })

  it("set completed by ID", () => {
    const todoList = new TodoList()
    todoList.create("get milk")
    todoList.create("get coffe")
    const expected = {
      id: 2,
      text: "get coffe",
      status: "completed"
    }
    const result = todoList.setAsCompletedByID(2)
    expect(result).toEqual(expected)
  })

  it("return the incomplete items", () => {
    const todoList = new TodoList()
    todoList.create("get milk")
    todoList.create("get coffe")
    todoList.create("go to the gym")
    todoList.setAsCompletedByID(3)

    const expected = [{
      id: 1,
      text: "get milk",
      status: "incomplete"
    },
    {
      id: 2,
      text: "get coffe",
      status: "incomplete"
    }]
    const result = todoList.getByStatus("incomplete")
    expect(result).toEqual(expected)
  })

  it("return the completed items", () => {
    const todoList = new TodoList()
    todoList.create("get milk")
    todoList.create("get coffe")
    todoList.create("go to the gym")
    todoList.setAsCompletedByID(1)
    todoList.setAsCompletedByID(3)

    const expected = [{
      id: 1,
      text: "get milk",
      status: "completed"
    },
    {
      id: 3,
      text: "go to the gym",
      status: "completed"
    }]
    const result = todoList.getByStatus("completed")
    expect(result).toEqual(expected)
  })

  it("search by ID", () => {
    const todoList = new TodoList()
    todoList.create("get milk")
    todoList.create("get coffe")
    const expected = {
      id: 2,
      text: "get coffe",
      status: "incomplete"
    }
    const result = todoList.searchById(2)
    expect(result).toEqual(expected)
  })

  it ("delete by ID", () => {
    const todoList = new TodoList()
    todoList.create("get milk")
    todoList.create("get coffe")
    todoList.create("go to the gym")
    const expected = [{
      id: 1,
      text: "get milk",
      status: "incomplete"
    },
    {
      id: 3,
      text: "go to the gym",
      status: "incomplete"
    }]
    const result = todoList.deleteById(2)
    expect(result).toEqual(expected)
  })
})
