import axios from 'axios'
import React from 'react'
import Users from '../Users/Users'

export default function Search({userName}) {

    const [search , setSearch] = React.useState([])

    React.useEffect(() => {

      async  function getSearch() {
            let searchData = await axios.get(`https://api.github.com/search/users?q=${userName}`)
            setSearch(searchData.data.items)
        }
      getSearch()

    }, [userName])

    console.log(search);

  return (
    <div>
          <Users img={search[0].avatar_url} users={search[0].login}/>
    </div>
  )
}
