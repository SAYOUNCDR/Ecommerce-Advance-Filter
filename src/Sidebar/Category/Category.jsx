import Input from "../../components/Input";
import "./Category.css";
const Category = (handleChange) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Category;
