import { Table as AntdTable, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../store";
import { useMemo, useState } from 'react';
import styles from './styles .module.sass'
import { ModalComponent } from "../Modal/ModalComponent";
import { ObjectData, ObjectState } from "../../types/objectTypes";
import { openModal } from "../../store/modalSlice";


export const Table: React.FC = () => {
    const [selectedData, setSelectedData] = useState<ObjectData[]>([])
    const dispatch = useDispatch()
    const columns = [
        {
            title: "Имя",
            dataIndex: "name",
            key: "name",
            sorter: (a: ObjectData, b: ObjectData) => a.name.localeCompare(b.name),
        },
        {
            title: "Количество",
            dataIndex: "quantity",
            key: "quantity",
            sorter: (a: ObjectData, b: ObjectData) => a.quantity - b.quantity,
        },
        {
            title: "Цена",
            dataIndex: "price",
            key: "price",
            sorter: (a: ObjectData, b: ObjectData) => a.price - b.price,
        },
        {
            title: "Дата",
            dataIndex: "deliveryDate",
            key: "deliveryDate",
            sorter: (a: ObjectData, b: ObjectData) =>
                new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime(),
        },
        {
            title: "Валюта",
            dataIndex: "currency",
            key: "currency",
            sorter: (a: ObjectData, b: ObjectData) =>
                a.currency.localeCompare(b.currency),
        },
    ];
    let data: ObjectData[] = useSelector(
        (state: RootState) => state.objects.objects
    );

    data = [...data];
    data.sort(
        (a: ObjectData, b: ObjectData) =>
            new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime()
    );

    const totalQuantity = useMemo(() => {
        return selectedData.reduce((acc, row) => acc + row.quantity, 0);
    }, [selectedData]);
    return (
        <div>
            <AntdTable
                dataSource={data}
                columns={columns}
                pagination={false}
                rowSelection={{
                    type: "checkbox",
                    onChange: (selectedRowKeys: React.Key[], selectedRows: ObjectData[]) => {
                        setSelectedData(selectedRows)
                    },
                }}
                rowKey="id"
            />
            <div>Общее количество: {totalQuantity}</div>
            {totalQuantity >= 1 && <Button type="primary" onClick={() => dispatch(openModal())}>Аннулировать</Button>}
            
            <ModalComponent data={selectedData} />
        </div>
    );
};
