class TodoList {
    constructor() {
        this.id = 1
        this.list = []
        this.status = "incomplete"
    }

    create(description) {
        let todoItem = {
            id: this.id,
            text: description,
            status: this.status
        }

        this.list.push(todoItem)
        this.id ++

        return this.list
    }

    getAllItems() {
        return this.list
    }

    setAsCompletedByID(ID) {

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === ID) {
                this.list[i].status = "completed"
                return this.list[i]
            }
        }
        return null
    }

    getByStatus(status) {
        const itemsStatus = this.list.filter(value =>  value.status === status)
        return itemsStatus
    }

    searchById(ID) {
        const itemSearched = this.list.find(value => value.id === ID)
        return itemSearched
    }

    deleteById(ID) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === ID) {
                this.list.splice(i, 1)
                return this.list
            }
        }
    }


}


const newTodo = new TodoList()
newTodo.create("turn the heating on!")
newTodo.create("get milk")
// console.log(newTodo.getAllItems()
console.log(newTodo.searchById(2))



module.exports = TodoList
