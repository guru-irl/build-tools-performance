import React from 'react';
const LABEL_17921 = 'component_17921';
export function Component17921({ value = 17921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17921, 'data-value': derived.doubled }, children);
}
export default Component17921;
