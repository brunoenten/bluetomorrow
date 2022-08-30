import { Blog } from '@/components/Blog'
import rss from '@/content/water'
import ApplicationLayout from '../layouts/application'

export default function Water() {  
  return (
    <ApplicationLayout>
      <Blog {...rss} />
    </ApplicationLayout>
  )
}
