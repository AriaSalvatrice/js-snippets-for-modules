// True if looks like a portable sequence. If so we parse from C++.
function isPortableSequence(input) {
    try {
        JSON.parse(input)
    } catch (e) {
        return false
    }
    if (! input.toLowerCase().includes("vcvrack-sequence")) {
        return false
    }
    return true
}

// require("./tests.js")
// console.log(isPortableSequence(validPortableSequence))
// console.log(isPortableSequence(badJsonPortableSequence))
// console.log(isPortableSequence(badPropertyPortableSequence))