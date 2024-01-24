import Button from '../utils/Button'
import './Recommended.css'

const Recommended = ({handleClick}) => {
  return (
   <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">

      <Button onClickHandler={handleClick} value='' title='All Products'/>
      <Button onClickHandler={handleClick} value='Basic' title='Basic'/>
      <Button onClickHandler={handleClick} value='Fluffy' title='Fluffy'/>
      <Button onClickHandler={handleClick} value='Creamy' title='Creamy'/>
      <Button onClickHandler={handleClick} value='Drink' title='Drink'/>

      </div>
      
    </div>
   </>
  )
}

export default Recommended
