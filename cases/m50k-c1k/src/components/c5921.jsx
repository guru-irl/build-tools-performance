import React from 'react';
const LABEL_5921 = 'component_5921';
export function Component5921({ value = 5921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5921, 'data-value': derived.doubled }, children);
}
export default Component5921;
