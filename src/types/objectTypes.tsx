export interface ObjectData {
    id: string;
    name: string;
    quantity: number;
    deliveryDate: string;
    price: number;
    currency: string;
}

export interface ObjectState {
    objects: ObjectData[];
}