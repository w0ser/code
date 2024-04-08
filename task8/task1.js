const users = [
    {username: "David", status: "online", lastActivity: 10},
    {username: "Lucy", status: "offline", lastActivity: 22},
    {username: "Bob", status: "online", lastActivity: 104}
];

const onlineUsers = users.filter(user => user.status === "online");
const usersOnlineNames = onlineUsers.map(user => user.username).join(", ");

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`); 