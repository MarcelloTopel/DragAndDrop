// Importa a imagem do logo
import logo from './logo.svg';
// Importa os estilos do arquivo App.css
import './App.css';
// Importa os estilos do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa o componente Container do react-bootstrap
import Container from 'react-bootstrap/Container';
// Importa os componentes do @dnd-kit/core para manipulação de arrastar e soltar
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
// Importa funções e componentes do @dnd-kit/sortable para criar listas reordenáveis
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
// Importa o hook useState do React
import { useState } from 'react';
// Importa o componente SortableItem do arquivo SortableItem.js
import { SortableItem } from './SortableItem';

// Novo componente Box para envolver os itens reordenáveis
const Box = ({ children }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
    {children}
  </div>
);

// Componente principal App
function App() {
  // Estado para armazenar as linguagens de programação
  const [languages, setLanguages] = useState(["Teste1", "teste2", "teste3"]);

  // Função chamada ao finalizar o arraste
  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    // Verifica se o item foi movido para uma posição diferente
    if (active.id !== over.id) {
      // Atualiza o estado reordenando as linguagens
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

  // Retorna o JSX do componente App
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {/* Container principal com estilos e alinhamento */}
      <Container className="p-3" style={{ "width": "50%" }} align="center">
        <h3>DnD</h3>
        {/* Componente Box envolvendo SortableContext e SortableItem */}
        <Box>
          <SortableContext
            items={languages}
            strategy={verticalListSortingStrategy}
          >
            {/* Mapeia as linguagens para criar componentes SortableItem */}
            {languages.map(language => <SortableItem key={language} id={language} />)}
          </SortableContext>
        </Box>
      </Container>
    </DndContext>
  );
}

// Exporta o componente App como padrão
export default App;