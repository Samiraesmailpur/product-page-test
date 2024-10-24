const Radio = ({ color, isChecked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        checked={isChecked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`w-6 h-6 border-2 rounded ${
          isChecked ? 'border-[teal]' : 'border-gray-300'
        }`}
        style={{ backgroundColor: color }}
      />
    </label>
  );
};

export default Radio;
