import React from 'react'
import { DefaultLayout } from '../components/Layouts/Default'
import { Icon } from '../components/Icon'
import { Heading } from '../components/landing-page/Heading'
import { Paragraph } from '../components/landing-page/Paragraph'
import { Label } from '../components/common/Label'

const NotFound = () => {
  return (
    <DefaultLayout>
      <div className="relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center pt-32 md:pt-56">
          <Heading level={1} className="flex items-center font-black">
            <span>404</span>
            <span className="ml-4 w-10 text-violet-500 dark:text-violet-400">
              <Icon name="broken-link" />
            </span>
          </Heading>
          <Paragraph className="pb-16 text-center">
            The URL you are looking for does not exist.
            <br />
            Hit <Label text="⌘K" /> to explore Wesjet.
          </Paragraph>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default NotFound
