import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './Cart';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 20
        }
    }

    componentDidMount() {
        // tự động chạy sau khi sinh ra giao diện lần đầu tiên (1 lần)

        let c = this.state.count;

        // setInterval(function () {
        //     c++;
        //     this.setState({
        //         count: c
        //     })
        // }, 2000);
    }



    addCount() {
        let c = this.state.count;
        c++

        this.setState({ count: c });

        console.log(c);
    }

    render() {
        const dataMenu = [
            {
                id: 1, name: 'Home',
            },
            {
                id: 2, name: "Contact",
            }
        ]



        const c = this.state.count;

        return (
            <div>
                <Header />
                <Menu menu={dataMenu} />

                <Cart />
            </div>
        );
    }
}

export default Home


// constructor -> render -> componentDidMount