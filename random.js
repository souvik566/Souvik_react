let parent =React.createElement(
  "div",
  {
    id:"parent"
  },
  React.createElement(
    "p",
    {
      id:"child"
    },
   [ React.createElement(
      "h1",
      {
        id:"child_1"
      },
      "Souvik",
      
    ),
    React.createElement(
      "h1",
      {
        id:"child_1"
      },
      "Souvik",
      
    )]
  )
)

ReactDOM.createRoot(document.getElementById("bdy")).render(
  parent
);


