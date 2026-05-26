const prompt = require("prompt-sync")();
let funds= 5000
let numbers= [2, 4, 2, 5, 1, 5, 7, 1, 3, 4] // Array of numbers to create a new Set
let newNumbers= new Set(numbers)
const products= [
    {ID: 1, Name: "queque", Price: 2000},
    {ID: 2, Name: "turron", Price: 2500},
    {ID: 3, Name: "happie brownie", Price: 4000},
    {ID: 4, Name: "quipitos", Price: 500} // Array of objects to create a new Map
]
const newProducts= new Map(products.map(product => [product.ID, product.Name])) // Relationates product ID with his name
function showNumbers(){
    console.log("Numbers")
    for (const number of newNumbers){
        console.log("-", number)
    }
}
let option // Option as undefined to initialize while loop that contains menu
while (option!= 5){
    console.log("\n1) See products\n2) Buy\n3) Number list\n4) Validate products \n5) Exit\n") // Options list
    option= parseInt(prompt("Pick one >> "))
    if (option== 1){
        // Iterates product list with for in
        for (product in products){
            console.log(products[product]) // Shows each element (whole dictionary)
        }
        // With for of, showing keys and value for each object with .entries built-in function
        for(product of products){
            for (const[k, v] of Object.entries(product)){ // Shows each element by key and value, using object method to iterate it
                console.log("-", k, "->", v)
            }
        }
        // With for each, using arrow function defining product to reference any object
        products.forEach(product => console.log(`ID -> ${product.ID} - Name -> ${product.Name}`)) 
        console.log("----------------------------")
        newProducts.forEach((ID, Name) => console.log(`ID: ${Name} - Name: ${ID}`))
        
    }
    else if (option== 2){
        toPurchase= prompt("Product name >> ").toLowerCase().trim() // lower and trim to compare it with product names
        quantity= parseInt(prompt("Quantity >> "))
        for (product of products){
            if (product["Name"]== toPurchase){ 
                console.log("Total:", product["Price"] * quantity)
                let total= product["Price"] * quantity
                confirm= prompt("Purchase? (y/n) >> ").toLowerCase()
                if (funds >= product["Price"] && confirm== "y"){
                    funds-= total
                    console.log("\nPurchased\nCurrent funds:", funds)
                }
                else{
                    console.log("\nInsufficient funds/ purchase canceled")
                }
            }
        }
    }
    else if (option== 3){
        showNumbers()
        const newNumber= parseInt(prompt("Type number to add >> "))
        newNumbers.add(newNumber)
        console.log("Number added to list! If this number already exists, it will be deleted by Set function.")
        showNumbers()
        const delNumber= parseInt(prompt("Type number to delete >> "))
        if (newNumbers.has(delNumber)){ // Using has method to apply delete also
            newNumbers.delete(delNumber)
            console.log(`${delNumber} deleted from list`)
            showNumbers()
        }
        else{
            console.log(`${delNumber} not in list`)
        }
    }
    else if (option== 4){
        for(product of products){
            if(!product.ID || product.Name== " " || !product.Price || product.Price <= 0){
                console.log(`There was an error registering ${product.Name}. Please register it again.`)
            }
            else{
                console.log(`${product.Name} validated sucessfully!`)
            }
        }
        for(product of newProducts){
            if(!product){
                console.log("Invalid product data!")
            }
            else{
                console.log("✅")
            }
        }
        for (number of newNumbers){
            if(isNaN(number)){
                console.log("Invalid data for number set!")
            }
            else{
                console.log("✅")
            }
        }
    }
    else if (option== 5){
        console.log("Bye")
    }
    else{
        console.log("Invalid option!")
    }
}
