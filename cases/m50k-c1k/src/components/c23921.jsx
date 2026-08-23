import React from 'react';
const LABEL_23921 = 'component_23921';
export function Component23921({ value = 23921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23921, 'data-value': derived.doubled }, children);
}
export default Component23921;
