// Importa o hook useSortable do pacote @dnd-kit/sortable
import { useSortable } from "@dnd-kit/sortable";
// Importa a utilidade CSS do pacote @dnd-kit/utilities
import { CSS } from "@dnd-kit/utilities";
// Importa o componente Card do react-bootstrap
import Card from 'react-bootstrap/Card';

// Declaração do componente funcional SortableItem
export function SortableItem(props) {
    // Extrai a propriedade id do objeto props
    // JavaScript

    // Desestrutura os valores retornados pelo hook useSortable
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });

    // Cria um objeto de estilo com transformação e transição
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    // Retorna o JSX do componente SortableItem
    return (
        // Adiciona referência ao nó DOM usando setNodeRef do hook useSortable
        // Aplica estilos e atributos de arrastável usando os valores do hook useSortable
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {/* Renderiza o componente Card com o corpo contendo o ID do item */}
            <Card body className="m-3">{props.id}</Card>
        </div>
    )
}
