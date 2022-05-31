// Add your domain model below

- PROPERTIES (ID, description, status start off as incomplete)
--- ID: Number, incremented for each new todoItem
--- text: string
--- status: string ("incomplete" at first, then switch to "complete" when the test requires it.)

1
METHOD: create(text)
RETURN: The created Item

2
METHOD: getAllItems()
RETURN: An array with all the created items

3
METHOD: setAsCompletedById(ID)
RETURN: The todoItem with status as "completed"

4/5
METHOD: getByStatus(status)
RETURN: The Item that is set as chosen status

6
METHOD: searchById(ID)
RETURN: The Item searched

7
METHOD: removeItemById(ID)
RETURN: The list without the element deleted or empty array in case it's empty