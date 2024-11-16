import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import  GenderCheckbox  from "./GenderCheckBox";
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
export default function SignUp() {
    const [formData, setFormData] = useState({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const { loading, signup } = useSignup();
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  
    const handleGenderChange = (gender) => {
      setFormData(prevData => ({
        ...prevData,
        gender
      }))
    }

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Handle sign up logic here
      // console.log('Sign up attempted with:', formData);
      await signup(formData);
    }
  
    return (
      <div className="flex min-h-screen items-center w-full justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
        <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-100">
            Sign Up <span className="text-blue-500">ChatApp</span>
          </h1>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-700 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="johndoe"
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-700 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="w-full rounded-md border-gray-700 bg-gray-700 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
  
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full rounded-md border-gray-700 bg-gray-700 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
  
            <div>
              <label className="text-sm font-medium text-gray-300">Gender</label>
              <GenderCheckbox selectedGender={formData.gender} onChange={handleGenderChange} />
            </div>
  
            <Link
              to="/login"
              className="inline-block text-sm text-blue-400 transition-colors duration-300 hover:text-blue-500 hover:underline"
            >
              Already have an account?
            </Link>
  
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    )
  }