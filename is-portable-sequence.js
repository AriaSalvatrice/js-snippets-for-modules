// True if looks like a portable sequence. 
// Won't use this code actually lol.
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
