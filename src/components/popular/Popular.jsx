import React from 'react'

 export default  function Popular
({repo}) {
  return (
    <div className='popular'>
        {repo.map(item => {
            return (
                <div key={item.id} className='pop'>
                    <a href={item.html_url}>{item.name}</a>
                </div>
            )
        })}
    </div>
  )
}
