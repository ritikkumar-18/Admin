import React from 'react'
import Header from '../components/Common/Header'
import SettingProfile from '../components/Settings/settingProfile'
import Notification from '../components/Settings/Notification'
import Security from '../components/Settings/Security'

const Settings = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title='Settings' />
    <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        <SettingProfile/>
        <Notification/>
        <Security/>
        </main>
    </div>

  )
}

export default Settings