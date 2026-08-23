import React from 'react';
const LABEL_14921 = 'component_14921';
export function Component14921({ value = 14921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14921, 'data-value': derived.doubled }, children);
}
export default Component14921;
