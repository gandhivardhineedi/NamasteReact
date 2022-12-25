
console.log(React);
console.log(ReactDOM);



// const title = React.createElement('H1', {
//     id : 'assignment_title'
// }, 'Session -1 Assignment');

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Chapter 01 - Inception"
  );

  const br = React.createElement("br");

  const theoryTitle = React.createElement("h3",{
    id: "theoryTitleid"
  },
  "Theory -");

  

  const theoryList1 = React.createElement("li",{},"What is Emmet?");
  const theoryList2 = React.createElement("li",{},"Difference between a Library and Framework?");
  const theoryList3 = React.createElement("li",{},"What is CDN? Why do we use it?");
  const theoryList4 = React.createElement("li",{},"Why is React known as React?");
  const theoryList5 = React.createElement("li",{},"What is crossorigin in script tag?");
  const theoryList6 = React.createElement("li",{},"What is diference between React and ReactDOM?");
  const theoryList7 = React.createElement("li",{},"What is difference between react.development.js and react.production.js files via CDN?");
  const theoryList8 = React.createElement("li",{},"What is async and defer? - see my Youtube video ;)");
  
  const theoryUL = React.createElement("ul", 
  {
    id: "theory_ul_id",   
  },
  [theoryList1,theoryList2,theoryList3,theoryList4,theoryList5,theoryList6,theoryList7,theoryList8]);


  const codeTitle = React.createElement("h3",{
    id: "codeTitleid"
  },
  "Code -");

  const codeList1li1 = React.createElement("li",{},"VS Code");
  const codeList1li2 = React.createElement("li",{},"Chrome");
  const codeList1li3 = React.createElement("li",{},"Extensions of VS Code");

  const codeList1Ul = React.createElement("ul", 
  {
    id: "codeList1Ul_ul_id",   
  },
  [codeList1li1,codeList1li2,codeList1li3]
  );
  const codeList1 = React.createElement("li",{},"Set up all the tools in your laptop",codeList1Ul);

  const codeList2 = React.createElement("li",{},"Create a new Git repo");

  const codeList2li1 = React.createElement("li",{},"Using just HTML");
  const codeList2li2 = React.createElement("li",{},"Using JS to manipulate the DOM");

  const codeList2li3li1 = React.createElement("li",{},"Using just HTML");
  const codeList2li3li2 = React.createElement("li",{},"Using JS to manipulate the DOM");  
  const codeList2li3li3 = React.createElement("li",{},"Using React");

  const codeList2li3ul = React.createElement("ul", 
  {
    id: "codeList1Ul_ul_id",   
  },
  [codeList2li3li1,codeList2li3li2,codeList2li3li3]
  );

  const codeList2li3 = React.createElement("li",{},"Using React",codeList2li3ul);

  const codeList2Ul = React.createElement("ul", 
  {
    id: "codeList1Ul_ul_id",   
  },
  [codeList2li1,codeList2li2,codeList2li3]
  );

  const codeList3 = React.createElement("li",{},"Build your first Hello World program using,",codeList2Ul);
  const codeList4 = React.createElement("li",{},"Push code to Github (Theory as well as code)");
  const codeList5 = React.createElement("li",{},"Learn about Arrow Functions before the next class");


  const codeLisUl = React.createElement("ul", 
  {
    id: "codeList1Ul_ul_id",   
  },
  [codeList1,codeList2,codeList3,codeList4,codeList5]
  );

  const reference = React.createElement("h3",{
    id: "refernceTitleid"
  },
  "References:");

  const referenceList1 = React.createElement("li",{},"https://beta.reactjs.org/apis/react/createElement");
  const referenceList2 = React.createElement("li",{},"https://www.youtube.com/watch?v=IrHmpdORLu8");


  const referenceLisUl = React.createElement("ul", 
  {
    id: "codeList1Ul_ul_id",   
  },
  [referenceList1,referenceList1]);

  const container = React.createElement(
    "div",{
        id: "container"
    },
    [heading,br,theoryTitle,theoryUL,br,codeTitle,codeLisUl,br,reference,referenceLisUl]
  );

 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);


