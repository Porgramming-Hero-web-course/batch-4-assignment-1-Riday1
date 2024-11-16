{
    //

    function countWordOccurrences(sentence: string, word: string) {
        const covertSentenceIntoWord = sentence.split(" ")
        // console.log(covertSentenceIntoWord)
        const wordArray = covertSentenceIntoWord.filter(singleWord => singleWord === word)
        const count = wordArray.length
        return count
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));



}