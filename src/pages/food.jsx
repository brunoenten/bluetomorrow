import { Blog } from '@/components/Blog'
import rss from '@/content/food'
import ApplicationLayout from '../layouts/application'

export default function Food() {  
  return (
    <ApplicationLayout>
      <Blog {...rss} />
    </ApplicationLayout>
  )
}
