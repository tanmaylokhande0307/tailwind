import { useState } from 'react'
import React, { useCallback } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'reactflow/dist/style.css';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

const initialNodes = [
  { id: '1', position: { x: 350, y: 0 }, data: { label: '1' } },
  // { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  // { id: '3', position: { x: 150, y: 100 }, data: { label: '3' } },
  // { id: '4', position: { x: 350, y: 100 }, data: { label: '4' } }
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [clicked, setClicked] = useState(false)
  const addNodes = () => {
    if (!clicked) {
      setClicked(true)
      setEdges((eds) => [...eds, { id: `e${(eds.length + 2).toString()}-${(nodes.length + 1).toString()}`, source: "1", target: "3" }, { id: `e${(eds.length + 3).toString()}-${(nodes.length + 2).toString()}`, source: "1", target: "4" }])
      setNodes((nds) => [...nds, { id: (nds.length + 1).toString(), position: { x: 200, y: 150 }, data: { label: (nds.length + 1).toString() } }, { id: (nds.length + 2).toString(), position: { x: 400, y: 150 }, data: { label: "3" } }, { id: (nds.length + 3).toString(), position: { x: 600, y: 150 }, data: { label: "4" } }])
      return
    }
    setNodes(initialNodes)
    setEdges(initialEdges)
    setClicked(false)
  }
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (<div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={addNodes}
    >
      <Controls />
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  </div>)
}

export default App
