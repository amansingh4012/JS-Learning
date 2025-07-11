const coding = ['js', 'rubby', 'java', 'cpp', 'python']

//coding.forEach( function (val) {
     //   console.log(val)
//})

//coding.forEach( (val) => {
  //  console.log(val)
//})

//function printMe(item){
  //  console.log(item)
//}

//coding.forEach(printMe)

/**
 * coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})
 */


const mycoding =[
    {
        langName: 'c++',
        langFileName: 'cpp'
    },
    {
        langName: 'python',
        langFileName: 'py'
    },
    {
        langName: 'java',
        langFileName: 'java'
    }
]

mycoding.forEach( (item) => {
    console.log(item.langName);
})