import React from 'react';
const LABEL_15921 = 'component_15921';
export function Component15921({ value = 15921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15921, 'data-value': derived.doubled }, children);
}
export default Component15921;
