import { MenuItem } from '@headlessui/react'
import React from 'react'
import type { ReactNode } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: ReactNode
  target?: string    // 新增属性
}

export default function DropdownMenuItem({ href, children, target }: Props) {
  return (
    <MenuItem>
      {({ focus }) => (
        <a
          href={href}
          target={target}
          className={classNames(
            focus ? 'bg-orange-200 dark:bg-zinc-700' : '',
            // 'block px-4 py-2 text-sm'
            'flex items-center px-4 py-2 text-sm'    // 修改以支持图标
          )}
        >
          {children}
        </a>
      )}
    </MenuItem>
  )
}
