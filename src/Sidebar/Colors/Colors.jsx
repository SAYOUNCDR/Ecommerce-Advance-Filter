import Input from "../../components/Input";
import "./Colors.css";
const Colors = (handleChange) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};

export default Colors;
