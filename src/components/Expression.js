import React from 'react';

const Expression = ({ expression, onDelete, onChange }) => {
  return (
    <div className="card mt-2" style={{ backgroundColor: expression.color }}>
      <div className="card-body">
        <div className="mb-2">
          <label htmlFor={`ruleType-${expression.id}`}>Rule Type:</label>
          <select
            id={`ruleType-${expression.id}`}
            value={expression.ruleType}
            onChange={(e) => onChange('ruleType', e.target.value)}
          >
            <option value="">Select Rule Type</option>
            <option value="Age">Age</option>
            <option value="Credit Score">Credit Score</option>
            <option value="Account Balance">Account Balance</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor={`operator-${expression.id}`}>Operator:</label>
          <select
            id={`operator-${expression.id}`}
            value={expression.operator}
            onChange={(e) => onChange('operator', e.target.value)}
          >
            <option value="">&mdash; Select Operator &mdash;</option>
            <option value=">">{'>'}</option>
            <option value="<">{'<'}</option>
            <option value=">=">{'>='}</option>
            <option value="=<">{'=<'}</option>
            <option value="=">{'='}</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor={`value-${expression.id}`}>Value:</label>
          <input
            type="text"
            id={`value-${expression.id}`}
            value={expression.value}
            onChange={(e) => onChange('value', e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor={`score-${expression.id}`}>Score:</label>
          <input
            type="text"
            id={`score-${expression.id}`}
            value={expression.score}
            onChange={(e) => onChange('score', e.target.value)}
          />
        </div>
        <button className="btn btn-danger" onClick={() => onDelete(expression.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Expression;
