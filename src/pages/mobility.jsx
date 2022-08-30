import { Blog } from '@/components/Blog'
import rss from '@/content/mobility'
import ApplicationLayout from '../layouts/application'

export default function Mobility() {  
  return (
    <ApplicationLayout>
      <Blog {...rss} />
    </ApplicationLayout>
  )
}
