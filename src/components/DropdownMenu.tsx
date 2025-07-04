import { Menu, MenuItems, MenuButton, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoMenu } from 'react-icons/io5'
import { IoGameController } from "react-icons/io5"
import DropdownMenuItem from './DropdownMenuItem'

interface NavItems {
  label: string
  href: string
  icon?: React.ReactNode
  target?: string
}

const NavItems = [
  { label: '首页', href: '/' },
  { label: '分类', href: '/cate' },
  { label: '友链', href: '/friends' },
  { label: '关于', href: '/about' },
  { label: '抓住小猫', href: '/catch-the-cat', icon: <IoGameController /> }
]

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
          <div className="py-1">
            {NavItems.map(item => (
              <DropdownMenuItem key={item.href} href={item.href} target={item.target}>
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </DropdownMenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
