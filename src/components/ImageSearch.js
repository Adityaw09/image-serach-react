import React , {useState} from 'react'

const ImageSearch = ({ searchText }) => {
    const[text, setText] = useState("")

    //onSubmit form

    const onSubmit = (e) =>{
        e.preventDefault();
        searchText(text);

    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">

            <form className="w-full max-w-sm " onSubmit={onSubmit}>
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pr-1 px-2 
                    leading-tight focus:outline-none" placeholder="Search Image"></input>
                    <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-teal-700 text-sm  
                    border-2 py-1 px-2 rounded ">Search</button>

                </div>

            </form>
        </div>
    )
}

export default ImageSearch
