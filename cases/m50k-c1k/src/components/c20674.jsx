import React from 'react';
const LABEL_20674 = 'component_20674';
export function Component20674({ value = 20674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20674, 'data-value': derived.doubled }, children);
}
export default Component20674;
