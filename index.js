// console.log('Hello pets')

const pets = [ 
    {
        name: 'Rex',
        species: 'dog',
        breed: 'Blue Healer',
        age: 84,
        friends: ['Sally', 'Norman'],
        'is vaccinated': false
    },
    {
        name: 'Norman',
        species: 'dog',
        breed: 'Canine',
        age: 24,
        friends: ['Rex', 'Sally'],
    },
    {
        name: 'Sally',
        species: 'cat',
        breed: 'Himalayan',
        age: 6,
        friends: ['Norman']
    },
    {
        name: "Blossom",
        species: 'cat',
        breed: 'Short hair',
        age: 5,
        friends: ['Stella', 'Misty']
    }
]

// Iterate over the array of objects and print out just the name

// For Of Loop -- Used for iterating over Arrays
// for (const pet of pets) {
//     console.log(pet.name)
// }


// Regular For Loops - used for iterating over a known range,
// and for iterating over arrays
// for (let i = 0; i < pets.length; i++) {
//     // Printing out name and species in a template literal
//     console.log( `${pets[i].name} is a ${pets[i].species}` )
// }


// Add a key to each object in the Pets array that says whether 
// the pet has been vaxxed or not.
for (let i = 0; i < pets.length; i++) {
    // Dot notation
    // pets[i].vaxxed = true

    // Bracket notation
    pets[i]['vaccinated'] = false
}



// If the pet is a dog, update the vaccinated key to be true
for (let i = 0; i < pets.length; i++) {
    if(pets[i].species === 'dog'){
        // console.log(`${pets[i].name} is a dog!`)
        pets[i].vaccinated = true
    }
}



// Continue => will stop any tasks on current iteration, and go straight to the next iteration
// for (let i = 0; i < pets.length; i++) {

//     // If this is true, skip to the next iteration
//     if(pets[i].name === 'Norman'){
//         continue;
//     }

//     console.log(pets[i].name)
    
// }

// Break => will jump out of the for loop and stop any logic from continuing when break is hit
// for (let i = 0; i < pets.length; i++) {
//     if(pets[i].name === 'Sally'){
//         // Stops for loop
//         break
//     }

//     console.log(pets[i].name)
    
// }


// Nested Loops

// Iterating over the pets array
for (let i = 0; i < pets.length; i++) {
    // Printed out the entire array of friends for that pet
    // console.log(pets[i].friends)

    // Using J as the iterator since we already used I
    // for (let j = 0; j < pets[i].friends.length; j++) {
    //     // Prints out each pet's friend's name
    //     console.log(pets[i].friends[j])
    // }

    // For Of, iterating over the array of friends for each pet 
    for (const friend of pets[i].friends) {
        console.log(friend)
    }

}