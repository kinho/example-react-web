import { useEffect, useState } from 'react'

import useUserStore from '../hooks/user_store'
import { list } from '../services/news'
import { NewsCard } from '../components/news_card'

function News() {
  const { user } = useUserStore()
  const [news, setNews] = useState([])

  useEffect(() => {
    const load = async () => {
      const data = await list({ headers: { authorization: user.token } })
      setNews(data || [])
    }
    load()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        List News
      </h1>
      <div className="bg-grey p-5 pt-0" style={{ width: 600 }}>
        <div className="p-5 w-min-20">
          {news.map(({ id, title, description, username }) => (
            <div key={`news-wrap-${id}`}>
              <NewsCard
                key={`news-card-${id}`}
                title={title}
                description={description}
                username={username}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
