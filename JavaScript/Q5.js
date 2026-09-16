let name = prompt("Enter your full name");
name = name.replace(/\s+/g, "");
let username = `@${name.trim().toLowerCase()}`;
    username += name.length;
console.log("your user name is ",username);