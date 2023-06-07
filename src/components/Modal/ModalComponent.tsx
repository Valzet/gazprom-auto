import styles from './styles.module.sass'
import { Modal, Button } from "antd";
import { useState } from 'react';
import { ObjectData, ObjectState } from "../../types/objectTypes";
import { ModalProps } from '../../types/modalTypes';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';
import { closeModal } from '../../store/modalSlice';

export const ModalComponent: React.FC<ModalProps> = ({ data }) => {

    const isModalOpen = useSelector((state: RootState) => state.modal.modalIsOpened)
    const dispatch = useDispatch()

    const handleOk = () => {

    };
    const handleCancel = () => {
        dispatch(closeModal())
    };
    return (
        <div className={styles.modal}>
            <Modal title="Вы уверены, что хотите аннулировать товар(ы):"
                okText="Применить"
                cancelText="Отклонить"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className={styles.list}>
                    {data.length && data.map((el, index) => <span key={index}> {el.name}{index !== data.length - 1 && ',' + ' '}</span>)}

                </div>

            </Modal>

        </div>
    )
}