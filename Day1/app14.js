function createQuestion(question,answer)
{
    let obj = {
        [question]:answer
    }
    return obj;
};

const qformed = createQuestion('what is my name ','dipu saha');
console.log(qformed);
