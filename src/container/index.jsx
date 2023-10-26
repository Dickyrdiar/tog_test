import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const LandingPage = () => {
  const [universities, setUniversities] = useState([])
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  const username  = JSON.parse(localStorage.getItem("username"))

  useEffect(() => {
    axios.get('http://universities.hipolabs.com/search?country=Indonesia')
    .then((response) => {
      setUniversities(response.data)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
    console.log(university);
  };

  const closePopup = () => {
    setSelectedUniversity(null);
  };

  console.log("user", username);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mb-4">
        <h2 className="text-3xl mt-4">Selamat datang {username}</h2>
        <div className="mt-8">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Nama Universitaso</th>
                <th className="border border-gray-300 px-4 py-2">Web</th>
                {/* <th className="border border-gray-300 px-4 py-2">Web</th> */}
              </tr>
            </thead>
            <tbody>
              {universities.map((university, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleUniversityClick(university)}>{index}</td>
                  <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleUniversityClick(university)}>{university.name}</td>
                  <td className="border border-gray-300 px-4 py-2"><a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a></td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedUniversity && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-2">University Information</h2>
                <p><strong>No:</strong> {selectedUniversity[0]}</p>
                <p><strong>Name:</strong> {selectedUniversity.name}</p>
                <p><strong>Website:</strong> {selectedUniversity.web_pages[0]}</p>
                <button onClick={closePopup} className="bg-blue-500 text-white p-2 mt-4 rounded-md">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
   
  )
}