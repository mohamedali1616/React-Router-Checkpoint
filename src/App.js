import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import NavAmine from './Components/NavAmine';


function App() {
  const [movies, setMovies] = useState(
    [
      {title : 'THE KILLER', description :'Après un désastre évité de justesse, un tueur se bat contre ses employeurs et lui-même, dans une mission punitive à travers le monde qui na soi-disant rien de personnel.',posterURL:'https://fr.web.img4.acsta.net/c_310_420/pictures/23/08/29/16/36/1165429.jpg',rating : 5, id : Math.random()},
      {title : 'Dachra', description :'Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère d’un vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt où ils allaient découvrir un petit village isolé appelé “Dachra”. Coincé dans ce territoire inconnu, le trio va essayer de fuir l’horreur. Auront-ils réussi à s’échapper ?',posterURL:'https://www.galeries.be/wp-content/uploads/2020/02/Dachra-poster.jpg',rating : 5, id : Math.random()},
      {title : 'Regarde-moi', description :'Lofti, la quarantaine, immigré tunisien installé à Marseille, partage sa vie entre son magasin d électroménager et sa petite-amie française, enceinte. Cependant, alors que son ex-femme vient de faire un AVC, il se retrouve tout à coup responsable de leur petit garçon autiste de 9 ans, Amr, qu il ne connaît pas.',posterURL:'https://pictures.artify.tn/media/fjagsqnc57kslterxbc1.jpg',rating : 2, id : Math.random()},
      {title : 'AKA', description :'Adam Franco est un agent infiltré, effectuant le sale boulot partout où il est nécessaire. Sa nouvelle mission, intégrer une organisation mafieuse en France pour déjouer un attentat terroriste imminent dans la capitale.',posterURL:'https://media.senscritique.com/media/000021333211/0/aka.png',rating : 3, id : Math.random()},



    ]
  );
  const [search, setSearch] = useState('')
  const [etoile, setEtoile] = useState(0)
  return (
   <div>
      <NavAmine/>
      <div className='AddFil'>
        <Filter setSearch={setSearch} setEtoile={setEtoile} search={search} etoile={etoile}/>
        <AddMovie setMovies={setMovies} movies={movies}/>
      </div>
      <MovieList movies={movies} search={search} etoile={etoile}/>
   </div>
  );
}

export default App;
