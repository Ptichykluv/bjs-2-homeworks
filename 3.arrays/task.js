function compareArrays(arr1, arr2) {

 return arr1.length === arr2.length && 
    arr1.every((value, index) => value === arr2[index]);
  
}

function getUsersNamesInAgeRange(users, gender) {

  let filteredUsers = users.filter(user => user.gender === gender);
  let filteredUsersAge = filteredUsers.map(filtereduser => filtereduser.age);

  if (users.length != 0 && (gender === "мужской" || gender === "женский")) {
    return filteredUsersAge.reduce((acc, item) => acc + item, 0) / filteredUsersAge.length;
  } else {
    return 0;
  }
  
}