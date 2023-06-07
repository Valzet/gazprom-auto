import { Table as AntdTable } from 'antd'; import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';


interface DataType { id: string; name: string; quantity: number; currency: string; price: number; deliveryDate: string }

export const Table: React.FC = () => {
    // const dataSource: DataType[] = [{
    //     key: '1',
    //     name: 'John Brown',
    //     quantity: 32,
    //     currency: 'USD',
    //     price: 999,
    //     deliveryDate: '2023-05-24'
    // }, {
    //     key: '2',
    //     name: 'Jim Green',
    //     quantity: 42,
    //     currency: 'RUB',
    //     price: 999,
    //     deliveryDate: '2023-05-22'
    // },];

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Дата',
            dataIndex: 'deliveryDate',
            key: 'deliveryDate',
        },
        {
            title: 'Валюта',
            dataIndex: 'currency',
            key: 'currency',
        }
    ];
    const data: DataType[] = useSelector((state: RootState) => state.objects.objects)
    return (
        <AntdTable
        dataSource={data}
        columns={columns}
        pagination={false}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(selectedRowKeys, selectedRows);
          },
        }}
        rowKey="id"
      />
    );
};