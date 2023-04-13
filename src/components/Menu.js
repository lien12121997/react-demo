import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className='flex flex-row space-x-4 px-16'>
                {this.props.menu.map((x, i) => 
                    <span key={i}>{x.name}</span>
                )}
            </div>
        );
    }
}

export default Menu