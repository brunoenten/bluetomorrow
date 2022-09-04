// Written from scratch
import { Blog } from '@/components/Blog'
import rss from '@/content/hvac'
import ApplicationLayout from '../layouts/application'

export default function Hvac() {
  return (
    <ApplicationLayout>
      <Blog {...rss} />
    </ApplicationLayout>
  )
}
