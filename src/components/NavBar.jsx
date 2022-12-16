import { useEffect, useState } from 'react'
import Link from 'next/link'

import clsx from 'clsx'

const sections = [
  {
    id: 'table-of-contents',
    title: (
      <>
        <span className="hidden lg:inline">Table of contents</span>
        <span className="lg:hidden">Contents</span>
      </>
    ),
  },
  { id: 'screencasts', title: 'Screencasts' },
  { id: 'resources', title: 'Resources' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'author', title: 'Author' },
]

export function NavBar() {
  let [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    function updateActiveIndex() {
      let newActiveIndex = null
      let elements = sections.map(({ id }) => document.getElementById(id))
      let bodyRect = document.body.getBoundingClientRect()

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1)
        return
      }

      setActiveIndex(newActiveIndex)
    }

    updateActiveIndex()

    window.addEventListener('resize', updateActiveIndex)
    window.addEventListener('scroll', updateActiveIndex, { passive: true })

    return () => {
      window.removeEventListener('resize', updateActiveIndex)
      window.removeEventListener('scroll', updateActiveIndex, { passive: true })
    }
  }, [])

  return (
    <div>
      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]"
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <Link
                href={`#${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  sectionIndex === activeIndex
                    ? 'border-blue-600 bg-blue-50 text-blue-600 before:text-blue-600'
                    : 'border-transparent before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900'
                )}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
