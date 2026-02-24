import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMaterials, saveMaterial } from '../features/materials/materialSlice';

const MaterialCrud = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.materials);
  const [newMaterial, setNewMaterial] = useState({ name: '', stockQuantity: 0 });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMaterials());
    }
  }, [status, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMaterial.name && newMaterial.stockQuantity >= 0) {
      dispatch(saveMaterial(newMaterial));
      setNewMaterial({ name: '', stockQuantity: 0 });
    }
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <h5>Novo Material</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label small">Nome</label>
              <input 
                type="text" 
                className="form-control" 
                value={newMaterial.name}
                onChange={(e) => setNewMaterial({...newMaterial, name: e.target.value})}
                placeholder="Ex: Aço, Madeira" 
              />
            </div>
            <div className="mb-3">
              <label className="form-label small">Quantidade em Estoque</label>
              <input 
                type="number" 
                className="form-control" 
                value={newMaterial.stockQuantity}
                onChange={(e) => setNewMaterial({...newMaterial, stockQuantity: parseInt(e.target.value)})}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Adicionar</button>
          </form>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card shadow-sm p-3">
          <h5>Estoque Atual</h5>
          <table className="table table-hover mt-2">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {items.map((m) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.name}</td>
                  <td>{m.stockQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MaterialCrud;