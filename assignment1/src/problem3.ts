{
    //

    function countWordOccurrences(sentence: string, word: string) {
        const covertSentenceIntoWord = sentence.split(" ")
        // console.log(covertSentenceIntoWord)
        const wordArray = covertSentenceIntoWord.filter(singleWord => singleWord === word)
        const count = wordArray.length
        return count
    }
    // console.log(countWordOccurrences("i love to play cricket  because cricket is a wellknown game in the world ", "cricket"));



}