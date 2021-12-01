import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { store } from '../store'
import { BlueButton } from '../shared/Buttons'
import { FlexRow } from '../shared/Layouts'

function Header() {
    const { state } = useContext(store)
    return (
        <div className="bg-white w-full flex px-0 lg:px-16 flex-col lg:flex-row h-auto lg:h-24 pb-1 lg:pb-0 box-border items-center justify-between z-10 bottom-shadow">
            <Link to="/">
                <div className="text-black text-5xl font-light">
                    {"//"}the <span className="font-medium">stoke list.</span>
                </div>
            </Link>
            <div className="flex items-center flex-column lg:flex-row text-gray-400">
                <FlexRow>
                    <Link to="/">
                        <div className="header-link">Home</div>
                    </Link>
                    <Link to="/garage">
                        <div className="header-link">Garage Map</div>
                    </Link>
                    <div className="w-0.5 h-8 bg-gray-400 hidden md:block"/>
                </FlexRow>
                <FlexRow>
                    {state.loggedIn && state.isAdmin && (
                        <Link to="/moderate">
                            <div className="header-link">Moderate</div>
                        </Link>
                    )}
                    {state.loggedIn ? (
                        <Link to="/myposts">
                            <div className="header-link">Your Posts</div>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <div className="header-link">Login</div>
                        </Link>
                    )}
                    <Link to="/post">
                        <BlueButton>Create Post</BlueButton>
                    </Link>
                </FlexRow>
            </div>
        </div>
    )
}

export default Header
