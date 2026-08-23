import React from 'react';
const LABEL_18921 = 'component_18921';
export function Component18921({ value = 18921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18921, 'data-value': derived.doubled }, children);
}
export default Component18921;
