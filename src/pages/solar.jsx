// Written from scratch
import { Blog } from '@/components/Blog'
import rss from '@/content/solar'
import ApplicationLayout from '../layouts/application'

export default function Solar() {
  return (
    <ApplicationLayout>
      <Blog {...rss} />
    </ApplicationLayout>
  )
}
