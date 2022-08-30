export function Post({...post}) {  
  return (
    <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        { post.enclosure
          ? (<img className="h-48 w-full object-cover" src={post.enclosure._url} alt="" />) 
          : (<></>)
        }
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">            
              {post.category ? post.category[0] : ''}            
          </p>
          <a href={post.link} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{typeof post.description === 'object'? post.description.__cdata : post.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">            
            <span className="sr-only">{post.creator ? post.creator.__cdata : ''}</span>            
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">              
              {post.creator ? post.creator.__cdata : ''}              
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.pubDate}>{post.pubDate}</time>
              <span aria-hidden="true">&middot;</span>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}