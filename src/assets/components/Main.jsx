import { useState } from "react";
export default function Main() {
  const [article, setArticle] = useState(["Pane", "Vino", "Pasta"]);
  const [newArticle, setNewArticle] = useState("");
  const addArticle = (e) => {
    e.preventDefault();
    setArticle([...article, newArticle]);
    setNewArticle("");
  };
  return (
    <main>
      <div className="container">
        <h1>LISTA</h1>
        <div className="list">
          <form onSubmit={addArticle}>
            <ul>
              {article.map((articles, index) => {
                return <li key={index}>{articles}</li>;
              })}
            </ul>
            <hr />
            <input
              type="text"
              value={newArticle}
              onChange={(e) => {
                setNewArticle(e.target.value);
              }}
            />
            <button className="btn">AGGIUNGI</button>
          </form>
        </div>
      </div>
    </main>
  );
}