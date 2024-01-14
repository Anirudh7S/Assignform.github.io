import React, { useState } from 'react';
import Expression from './Expression';

const Form = () => {
  const [connectorType, setConnectorType] = useState('AND');
  const [expressions, setExpressions] = useState([]);
  const [output, setOutput] = useState(null);

  const addExpression = () => {
    const newExpression = {
      id: expressions.length + 1,
      ruleType: '',
      operator: '',
      value: '',
      score: '',
    };
    setExpressions([...expressions, newExpression]);
  };

  const deleteExpression = (id) => {
    setExpressions(expressions.filter((exp) => exp.id !== id));
  };

  const handleConnectorTypeChange = (e) => {
    setConnectorType(e.target.value);
  };

  const handleExpressionChange = (id, field, value) => {
    setExpressions((prevExpressions) =>
      prevExpressions.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const generateOutput = () => {
    const rules = expressions.map((expression) => {
      return {
        key: expression.ruleType.toLowerCase().replace(' ', '_'),
        output: {
          value: parseFloat(expression.value),
          operator: expression.operator,
          score: parseInt(expression.score),
        },
      };
    });

    setOutput({
      rules,
      combinator: connectorType.toLowerCase(),
    });
  };

  return (
    <div className="container mt-4">
      <div className="form-group mb-3">
        <label htmlFor="connectorType">Connector Type:</label>
        <select
          id="connectorType"
          value={connectorType}
          onChange={handleConnectorTypeChange}
          className="form-control"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={addExpression}>
          Add Expression
        </button>
      </div>
      {expressions.map((expression) => (
        <Expression
          key={expression.id}
          expression={expression}
          onDelete={deleteExpression}
          onChange={(field, value) => handleExpressionChange(expression.id, field, value)}
        />
      ))}
      <div className="mb-3">
        <button className="btn btn-success" onClick={generateOutput}>
          Generate Output
        </button>
      </div>
      {output && (
        <div className="mt-4">
          <h2>Generated Output:</h2>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;
