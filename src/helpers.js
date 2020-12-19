function choice (arr) {
    let randomIndex = Math.floor(Math.random () * Array.length);
    return arr[randomIndex]; 
}

export { choice }