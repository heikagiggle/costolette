
import Input from '../../utils/Input'
import './Category.css'


const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value='' name='test' />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Pancakes"
          title="Pancakes"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Cocktails"
          title="Cocktails"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Wine"
          title="Wine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Tea"
          title="Tea"
          name="test"
        />
     
      </div>
    </div>
  )
}

export default Category
