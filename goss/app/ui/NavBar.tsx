'use client'; // Keep this as a client component

import { usePathname } from 'next/navigation';
import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineBell,
  HiOutlineUser,
} from 'react-icons/hi2';
import RecordPost from './RecordPost';
import { useSessionContext } from '../context/SessionContext';
import NavItem from './NavItem';
import { useQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/app/api/fetchNotifications';
import { useGlobalNotifications } from '../context/NotificationsContext';

function NavBar() {
  const { data: session } = useSessionContext();
  const username = session?.profile.username;
  const userId = session?.profile.user_id;
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const { notifications, isLoading } = useGlobalNotifications();

  // Filter unread notifications from fetched data
  const unreadCount = notifications?.filter((n) => !n.is_read).length || 0;

  return (
    <nav className="fixed bottom-0 w-full max-w-[430px] rounded-t-lg bg-gray-50 shadow-md">
      {isActive('/home') && (
        <div className="absolute bottom-14 left-1/2 z-10 -translate-x-1/2 transform">
          <RecordPost />
        </div>
      )}

      <div className="flex">
        {/* Home */}
        <NavItem
          href="/home"
          icon={HiOutlineHome}
          isActive={isActive('/home')}
          label="Home"
        />
        {/* Search */}
        <NavItem
          href="/search"
          icon={HiOutlineMagnifyingGlass}
          isActive={isActive('/search')}
          label="Search"
        />

        {/* Notifications */}
        <NavItem
          href="/notifications"
          icon={HiOutlineBell}
          isActive={isActive('/notifications')}
          label="Notifications"
        >
          {/* Badge for unread notifications */}
          {!isLoading && unreadCount > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {unreadCount}
            </span>
          )}
        </NavItem>

        {/* Profile */}
        <NavItem
          href={`/${username}`}
          isActive={isActive(`/${username}`)}
          label="Profile"
        >
          {session?.profile?.profile_img ? (
            <img
              src={session?.profile.profile_img}
              className="h-10 w-10 rounded-full"
              alt={`${username}'s profile`}
            />
          ) : (
            <HiOutlineUser
              color={isActive(`/${username}`) ? '#9333ea' : '#7b53bb'}
              size={32}
              style={{ strokeWidth: isActive(`/${username}`) ? 2.5 : 1 }}
            />
          )}
        </NavItem>
      </div>
    </nav>
  );
}

export default NavBar;
