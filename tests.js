validPortableSequence = `
{
    "vcvrack-sequence": {
      "length": 4.0,
      "notes": [
        {
          "type": "note",
          "start": 0.5,
          "pitch": 0,
          "length": 0.85
        },
        {
          "type": "note",
          "start": 1.5,
          "pitch": 0.166666667,
          "length": 0.85
        }
      ]
    }
}
`.trim()
badJsonPortableSequence = `
{
    "vcvrack-sequence": {
      "length": 4.0,
      "notes": [

        "type": "note",
          "start": 0.5,
          "pitch": 0,
          "length": 0.85
        },
        {
          "type": "note",
          "start": 1.5
          "pitch": 0.166666667,
          "length": 0.85
        }
      ]
    }
}
`.trim()
badPropertyPortableSequence = `
{
    "fun-music-sequence": {
      "length": 4.0,
      "notes": [
        {
          "type": "note",
          "start": 0.5,
          "pitch": 0,
          "length": 0.85
        },
        {
          "type": "note",
          "start": 1.5,
          "pitch": 0.166666667,
          "length": 0.85
        }
      ]
    }
}
`.trim()
validLeadsheet1 = "C, D, E";
validLeadsheet2 = "amin, b,e7";
validLeadsheet3 = "A";
validLeadsheet4 = "E/B C";
validLeadsheet5 = "  G am C B, E/G# Bb A,Fsus2   Csus2  ";
validRoman1 = "I V vi IV"
validRoman2 = "V"

invalidInput1 = "Woof"
invalidInput2 = "E H I POOP Amin C/D "
