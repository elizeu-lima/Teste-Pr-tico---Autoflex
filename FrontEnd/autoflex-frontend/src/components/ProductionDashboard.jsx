import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductionSuggestion } from '../features/products/productSlice';

const ProductionDashboard = () => {
  const dispatch = useDispatch();
  const { suggestion } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductionSuggestion());
  }, [dispatch]);

  return (
    <div className="card shadow-sm border-0 fade-in">
      <div className="card-header text-white fw-bold" style={{ backgroundColor: '#003366' }}>
        📊 SUGESTÃO OTIMIZADA DE PRODUÇÃO
      </div>
      <div className="card-body p-4">
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', borderLeft: '5px solid #E31E24' }}>
              <small className="text-muted d-block">VALOR BRUTO ESTIMADO</small>
              <h2 className="fw-bold mb-0" style={{ color: '#003366' }}>
                R$ {suggestion.totalValue?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h2>
            </div>
          </div>
        </div>

        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>PRODUTO</th>
              <th className="text-center">QTD SUGERIDA</th>
            </tr>
          </thead>
          <tbody>
            {suggestion.suggestedProduction?.map((item, index) => (
              <tr key={index}>
                <td className="fw-semibold">{item.productName}</td>
                <td className="text-center">
                  <span className="badge p-2" style={{ backgroundColor: '#E31E24' }}>{item.quantity} un</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductionDashboard; // <--- ESSA LINHA É A QUE RESOLVE O ERRO DA IMAGEM!