import { Table as AntdTable } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useMemo, useState } from 'react';
import styles from './styles .module.sass'


interface DataType {
    id: string;
    name: string;
    quantity: number;
    currency: string;
    price: number;
    deliveryDate: string;
}

export const Table: React.FC = () => {
    const [selectedData, setSelectedData] = useState<any[]>([])
    const columns = [
        {
            title: "Имя",
            dataIndex: "name",
            key: "name",
            sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
        },
        {
            title: "Количество",
            dataIndex: "quantity",
            key: "quantity",
            sorter: (a: DataType, b: DataType) => a.quantity - b.quantity,
        },
        {
            title: "Цена",
            dataIndex: "price",
            key: "price",
            sorter: (a: DataType, b: DataType) => a.price - b.price,
        },
        {
            title: "Дата",
            dataIndex: "deliveryDate",
            key: "deliveryDate",
            sorter: (a: DataType, b: DataType) =>
                new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime(),
        },
        {
            title: "Валюта",
            dataIndex: "currency",
            key: "currency",
            sorter: (a: DataType, b: DataType) =>
                a.currency.localeCompare(b.currency),
        },
    ];
    let data: DataType[] = useSelector(
        (state: RootState) => state.objects.objects
    );

    data = [...data];

    data.sort(
        (a: DataType, b: DataType) =>
            new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime()
    );

    const totalQuantity = useMemo(() => {
        return selectedData.reduce((acc, row) => acc + row.quantity, 0);
    }, [selectedData]);
    console.log(totalQuantity)


    return (
        <div>
            <AntdTable
                dataSource={data}
                columns={columns}
                pagination={false}
                rowSelection={{
                    type: "checkbox",
                    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
                        console.log(selectedRowKeys, selectedRows);
                        setSelectedData(selectedRows)
                    },
                }}
                rowKey="id"
            />
            <div>Общее количество: {totalQuantity}</div>
        </div>
    );
};
