import React, { useEffect, useState } from 'react';
import { Pie } from '@ant-design/plots';
import { orderServices } from '../../../../services/orderService';
const DemoPie = () => {
    const [valueStatusOne, setvalueStatusOne] = useState();
    const [valueStatusTwo, setvalueStatusTwo] = useState();
    const [valueStatusThree, setvalueStatusThree] = useState();
    const [valueStatusFour, setvalueStatusFour] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerpage] = useState(8);
    const data = [
        { type: 'Chờ xác nhận', value: valueStatusOne },
        { type: 'Đang giao hàng', value: valueStatusTwo },
        { type: 'Đã giao hàng', value: valueStatusThree },
        { type: 'Đã hủy hàng', value: valueStatusFour }
    ];
    //lấy dữ liệu đơn hàng chờ xác nhận 
    const getOrderStatusOne = async () => {
        try {
            const res = await orderServices.get(
                {
                    "Limit": currentPage,
                    "PageIndex": rowsPerPage,
                    "Status": 1
                }
            );
            setvalueStatusOne(res.totalCount);
        } catch (error) {
            console.error(error);
        }
    }
    //lấy dữ liệu đơn hàng đang vận chuyển
    const getOrderStatusTwo = async () => {
        try {
            const res = await orderServices.get(
                {
                    "Limit": currentPage,
                    "PageIndex": rowsPerPage,
                    "Status": 2
                }
            );
            setvalueStatusTwo(res.totalCount);
        } catch (error) {
            console.error(error);
        }
    }
    //lấy dữ liệu đơn hàng đã giao hàng
    const getOrderStatusThree = async () => {
        try {
            const res = await orderServices.get(
                {
                    "Limit": currentPage,
                    "PageIndex": rowsPerPage,
                    "Status": 3
                }
            );
            setvalueStatusThree(res.totalCount);
        } catch (error) {
            console.error(error);
        }
    }
    //lấy dữ liệu đơn hàng đã hủy
    const getOrderStatusFour = async () => {
        try {
            const res = await orderServices.get(
                {
                    "Limit": currentPage,
                    "PageIndex": rowsPerPage,
                    "Status": 4
                }
            );
            setvalueStatusFour(res.totalCount);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getOrderStatusOne();
        getOrderStatusTwo();
        getOrderStatusThree();
        getOrderStatusFour();
    }, [valueStatusOne, valueStatusTwo, valueStatusThree, valueStatusFour])
    return (
        <Pie
            data={data}
            angleField='value'
            colorField='type'
            paddingRight={80}
            innerRadius={0.6}
            label={{
                text: 'value',
                style: {
                    fontWeight: 'bold',
                },
            }}
            legend={{
                color: {
                    title: false,
                    position: 'right',
                    rowPadding: 5,
                },
            }}
            annotations={[
                {
                    type: 'text',
                    style: {
                        text: 'Đơn hàng',
                        x: '50%',
                        y: '50%',
                        textAlign: 'center',
                        fontSize: 40,
                        fontStyle: 'bold',
                    },
                },
            ]}
        />
    );
};

export default DemoPie;
