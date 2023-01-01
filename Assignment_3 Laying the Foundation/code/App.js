import HeaderCompoent from "./HeaderComponent";
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));


const Container = () => {
   
        <HeaderCompoent></HeaderCompoent>
        {Title()}
 
}

const Title = () => {
    return (
        <div id="title">
            <h1>Namaste React</h1>
            {heading}
            {miniHeading}
        </div>
    )
}

const heading = <h2>Chapter -03 </h2>;

const miniHeading = <h3>Laying foundation</h3>;

root.render( <HeaderCompoent></HeaderCompoent>);

