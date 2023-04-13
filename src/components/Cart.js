import React from 'react';

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Rau củ',
                    gia: '50000',
                    qty: 5
                },
                {
                    id: 2,
                    name: 'Hoa quả',
                    gia: '300000',
                    qty: 4
                },
                {
                    id: 3,
                    name: 'Rau sống',
                    gia: '7000',
                    qty: 2
                },
                {
                    id: 4,
                    name: 'Dưa gang',
                    gia: '200000',
                    qty: 2
                },
                {
                    id: 5,
                    name: 'Mận Cao Bằng',
                    gia: '30000',
                    qty: 10
                },
                {
                    id: 6,
                    name: 'Vải thiều',
                    gia: '100000',
                    qty: 2
                },
            ]
        }
    }

    render() {
        return (
            <div className='w-full flex flex-col px-16'>
                <div className='w-full flex flex-row items-center border-b py-4'>
                    <div className='w-6/12 flex justify-start items-center'>
                        <span className='font-medium'>Products</span>
                    </div>
                    <div className='w-2/12 flex justify-center items-center'>
                        <span className='font-medium'>Price</span>
                    </div>
                    <div className='w-2/12 flex justify-center items-center'>
                        <span className='font-medium'>Quantity</span>
                    </div>
                    <div className='w-2/12 flex justify-end items-center'>
                        <span className='font-medium'>Total</span>
                    </div>
                </div>

                {this.state.products.map((x, i) =>
                    <div key={i} className='w-full flex flex-row items-center border-b py-5'>
                        <div className='w-6/12 flex flex-row space-x-2 justify-start items-center'>
                            <img src='./img/anh.jpg' className='w-[120px]'/>
                            <span className=''>{x.name}</span>
                        </div>
                        <div className='w-2/12 flex justify-center items-center'>
                            <span className='font-medium'>{x.gia}</span>
                        </div>
                        <div className='w-2/12 flex justify-center items-center'>
                            <div className='flex flex-row justify-between items-center bg-slate-100'>
                            <button className='w-9 h-9 flex justify-center items-center'>-</button>
                            <span className='w-9 h-9 flex justify-center items-center'>{x.qty}</span>
                            <button className='w-9 h-9 flex justify-center items-center'>+</button>
                            </div>
                        </div>
                        <div className='w-2/12 flex justify-end items-center'>
                            <span className='font-medium'>{x.gia * x.qty}</span>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}