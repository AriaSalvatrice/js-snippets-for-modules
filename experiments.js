Tonal = require("@tonaljs/tonal")

function tokenize(input) {
    input = input.replace("(", "") // No parentheses
    input = input.replace(")", "")
    input = input.split(/[,-\s]\s*/) // Commas, hyphens, spaces
    input = input.filter(element => {return element != ""})
    return input
}

// MIDI 60 = 0V = C4 = 261.6256 hz
function toVOct(pitch){
    pitch = Tonal.Midi.toMidi(pitch)
    pitch = (pitch - 60) * 1 / 12
    return pitch
} 

// Tonic on the 4th octave for easier further conversion
function parseAsLeadsheet(input) {
    pitchSeries = input.map(currentChord => {       
        if (currentChord.includes("/")) {
            split = currentChord.split("/")
            currentChord = Tonal.Chord.get(split[0])
            currentChord = Tonal.Chord.getChord(currentChord.aliases[0], currentChord.tonic, split[1])
        } else {
            currentChord = Tonal.Chord.get(currentChord)
        }
        currentFirstNote = Tonal.note(currentChord.tonic + "4")
        return currentChord.intervals.map(interval => Tonal.transpose(currentFirstNote, interval))

    })
    // return pitchSeries.map(chord => chord.map(pitch => toVOct(pitch)))
    return pitchSeries
}

// FIXME - It doesn't accept lowercase, but accepts a m suffix
// FIXME - It doesn't accept slash chords
function parseAsRoman(tonic, input) {
    input = tokenize(input)
    progression = Tonal.Progression.fromRomanNumerals(tonic, input)
    return parseAsLeadsheet(progression)
}

// require("./tests.js")
console.log(parseAsRoman("C", "I V vim7 V bVI bIII bVII IV"))
// console.log(parseAsRoman("A", "im VIm"))
// console.log(parseAsRoman("A", "V7/V"))
// console.log("- Valid Leadsheet 1:")
// console.log(parseAsLeadsheet(tokenize(validLeadsheet1)))
// console.log("- Valid Leadsheet 2:")
// console.log(parseAsLeadsheet(validLeadsheet2))
// console.log("- Valid Leadsheet 3:")
// console.log(parseAsLeadsheet(validLeadsheet3))
// console.log("- Valid Leadsheet 4:")
// console.log(parseAsLeadsheet(validLeadsheet4))
// console.log("- Valid Leadsheet 5:")
// console.log(parseAsLeadsheet(validLeadsheet5))
// console.log("- Invalid 1:")
// console.log(parseAsLeadsheet(validRomanLeadsheet1))
// console.log("- Invalid 2:")
// console.log(parseAsLeadsheet(invalidInput1))
// console.log("- Invalid 3:")
// console.log(parseAsLeadsheet(invalidInput2))