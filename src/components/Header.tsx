import React from 'react'

interface HeaderProps {
    title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => {
    return (
        <header className="uk-margin-large-bottom">
            <nav className="uk-navbar uk-background-primary uk-light" uk-navbar="true">
                <div className="uk-navbar-left">
                    <span className="uk-navbar-item uk-icon" uk-icon="icon: uikit; ratio: 2"></span>
                </div>
                <div className="uk-navbar-center">
                    <span className="uk-navbar-item uk-text-lead">{title}</span>
                </div>
            </nav>
        </header>
    )
}

export default Header
