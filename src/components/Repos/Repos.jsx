import React from 'react'
import axios from 'axios'
import "./main.scss"
import {valueCon} from '../../context'


export default function Repos({userName}) {

    const [repos, setRepos] = React.useState([]) 
    const [value,] = React.useContext(valueCon)


    console.log(userName);
    React.useEffect(() => {

        async  function getSearch() {
              let reposData = await axios.get(`https://api.github.com/users/${value}/repos`)
              setRepos(reposData.data)
          }
        getSearch()
  
      }, [value])

      console.log(repos);

  return (
    <div className='repos_wrapper'>
        {repos.map(item => {
            return (
                
               
                    <div key={item.id} className='repos'>
                        <a target="_blank" href={item.html_url}>
                                {item.name}
                        </a>
                    </div>
               
                
            )
        })}
    </div>
  )
}
