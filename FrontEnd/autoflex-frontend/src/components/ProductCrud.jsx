import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, saveProduct } from '../features/products/productSlice';
import { fetchMaterials } from '../features/materials/materialSlice';

const ProductCrud = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const materials = useSelector((state) => state.materials.items);

  const [product, setProduct] = useState({ name: '', price: 0, components: [] });

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchMaterials());
  }, [dispatch]);

  const addComponentRow = () => {
    setProduct({
      ...product,
      components: [...product.components, { rawMaterial: { id: '' }, requiredQuantity: 1 }]
    });
  };

  const handleComponentChange = (index, field, value) => {
    const updatedComponents = [...product.components];
    if (field === 'rawMaterialId') {
      updatedComponents[index].rawMaterial.id = value;
    } else {
      updatedComponents[index].requiredQuantity = parseFloat(value);
    }
    setProduct({ ...product, components: updatedComponents });
  };

  const handleSave = () => {
    dispatch(saveProduct(product));
    setProduct({ name: '', price: 0, components: [] });
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <div className="card shadow-sm p-3 mb-4">
          <h5>Cadastrar Produto & Receita</h5>
          <input 
            type="text" className="form-control mb-2" placeholder="Nome do Produto"
            value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})}
          />
          <input 
            type="number" className="form-control mb-3" placeholder="Preço de Venda"
            value={product.price} onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})}
          />
          
          <h6 className="mt-3">Composição (RF007)</h6>
          {product.components.map((comp, index) => (
            <div key={index} className="d-flex gap-2 mb-2">
              <select 
                className="form-select" 
                onChange={(e) => handleComponentChange(index, 'rawMaterialId', e.target.value)}
              >
                <option value="">Selecione...</option>
                {materials.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
              <input 
                type="number" className="form-control w-25" placeholder="Qtd"
                onChange={(e) => handleComponentChange(index, 'qty', e.target.value)}
              />
            </div>
          ))}
          <button className="btn btn-outline-secondary btn-sm mb-3" onClick={addComponentRow}>+ Adicionar Material</button>
          <button className="btn btn-primary w-100" onClick={handleSave}>Salvar Produto</button>
        </div>
      </div>

      <div className="col-md-7">
        <div className="card shadow-sm p-3">
          <h5>Produtos Cadastrados</h5>
          <div className="list-group mt-2">
            {products.map(p => (
              <div key={p.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{p.name}</strong>
                  <span className="badge bg-primary">R$ {p.price.toFixed(2)}</span>
                </div>
                <small className="text-muted">
                  Materiais: {p.components?.map(c => `${c.requiredQuantity}x ${c.rawMaterial.name}`).join(', ')}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCrud;