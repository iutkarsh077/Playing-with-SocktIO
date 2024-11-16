import React from 'react';
const GenderCheckbox = ({ selectedGender, onChange }) => {
	return (
	  <div className="flex space-x-4">
		<label className="flex items-center space-x-2 cursor-pointer">
		  <input
			type="radio"
			name="gender"
			value="male"
			checked={selectedGender === 'male'}
			onChange={() => onChange('male')}
			className="form-radio text-blue-500 focus:ring-blue-500"
		  />
		  <span className="text-gray-300">Male</span>
		</label>
		<label className="flex items-center space-x-2 cursor-pointer">
		  <input
			type="radio"
			name="gender"
			value="female"
			checked={selectedGender === 'female'}
			onChange={() => onChange('female')}
			className="form-radio text-blue-500 focus:ring-blue-500"
		  />
		  <span className="text-gray-300">Female</span>
		</label>
	  </div>
	)
  }

  export default GenderCheckbox;