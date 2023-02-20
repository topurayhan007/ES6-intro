// arrow func, return an array containing the even length of strings from the elements passed as an array.
const evenNameFriends = (friends) => {
  const newFriendList = [];
  for (const friend of friends) {
    if (friend.length % 2 == 0) {
      newFriendList.push(friend);
    }
  }
  return newFriendList;
};

const friends = ["Jamir", "Karimz", "Monirz", "Dolil", "John"];
console.log(evenNameFriends(friends));
