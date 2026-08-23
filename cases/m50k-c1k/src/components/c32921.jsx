import React from 'react';
const LABEL_32921 = 'component_32921';
export function Component32921({ value = 32921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32921, 'data-value': derived.doubled }, children);
}
export default Component32921;
