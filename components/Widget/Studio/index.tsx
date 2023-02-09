import { FC } from 'react'
import Link from 'next/link'
import { Icon } from '../../Icon'
import { format } from 'date-fns'
import { Doc, Studio } from 'wesjet/jetpack'

const githubBranch = 'main'
const githubBaseUrl = `https://github.com/wesbitty/website/blob/${githubBranch}/[posts]/`

export const StudioFooterWidget: FC<{ studio: Studio }> = ({ studio }) => {
  return (
    <>
      <hr />
      <div className="space-y-4 text-sm sm:flex sm:justify-between sm:space-y-0">
        <p className="m-0">
          Was this example helpful to you? <br />{' '}
          <Link href="https://github.com/wesbitty/wesbitty/issues">
            <a className="inline-flex items-center space-x-1" target="_blank" rel="noreferrer">
              <span className="inline-block w-4">
                <Icon name="github" />
              </span>
              <span>Provide feedback</span>
            </a>
          </Link>
        </p>
        <p className="m-0 text-right">
          Last edited on {format(new Date(studio.last_edited), 'MMMM dd, yyyy')}.<br />
          <Link href={githubBaseUrl + studio._raw.sourceFilePath}>
            <a className="inline-flex items-center space-x-1" target="_blank" rel="noreferrer">
              <span className="inline-block w-4">
                <Icon name="github" />
              </span>
              <span>Edit this page</span>
            </a>
          </Link>
        </p>
      </div>
    </>
  )
}
