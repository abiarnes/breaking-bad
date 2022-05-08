import spinner from '../media/spinner.webp'

const Spinner = () => {
    return (
        <div className='spinner-container'>
            <img src={spinner} className='spinner'/>
        </div>
    );
}
 
export default Spinner;