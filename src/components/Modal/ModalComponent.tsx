import styles from './styles.module.sass'
import { Modal} from "antd";
import { ModalProps } from '../../types/modalTypes';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';
import { closeModal } from '../../store/modalSlice';

export const ModalComponent: React.FC<ModalProps> = ({ data }) => {

    const isModalOpen = useSelector((state: RootState) => state.modal.modalIsOpened)
    const dispatch = useDispatch()

    const handleOk = () => {
        const ids: string[] = data.map((obj) => obj.id);
        alert('Запрос на удаление условно отправлен. Результат в консоли')
        console.log(ids)
        console.log('К сожалению, в mockapi.io есть ограничение на кол-во эндпоинтов')
        dispatch(closeModal())

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
                <ul className={styles.list}>
                    {data.length && data.map((el, index) => <li className={styles.span} key={index}>&#32;{el.name}</li>)}

                </ul>

            </Modal>

        </div>
    )
}