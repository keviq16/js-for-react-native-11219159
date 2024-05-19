// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    let id = 1;
    return names.map((name, index) => {
      return {
        originalName: name,
        modifiedName: modifiedNames[index],
        id: id++
      };
    });
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const modifiedNames = ["ALICE", "bob", "CHARLIE", "david", "EVE"];
  const userProfiles = createUserProfiles(names, modifiedNames);
  console.log(userProfiles);
  /* Output:
  [
    { originalName: 'Alice', modifiedName: 'ALICE', id: 1 },
    { originalName: 'Bob', modifiedName: 'bob', id: 2 },
    { originalName: 'Charlie', modifiedName: 'CHARLIE', id: 3 },
    { originalName: 'David', modifiedName: 'david', id: 4 },
    { originalName: 'Eve', modifiedName: 'EVE', id: 5 }
  ]
  */
  