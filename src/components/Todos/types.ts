
export interface ITodo{
    title: string;
    complete: boolean;
    id: number;
}
export interface ITodoRequest{
    title: string;
    complete: boolean;
}
export interface ITodoProps{
    todo: ITodo;
    onDelete: () => void;
}