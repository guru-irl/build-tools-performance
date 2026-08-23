import React from 'react';
const LABEL_36921 = 'component_36921';
export function Component36921({ value = 36921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36921, 'data-value': derived.doubled }, children);
}
export default Component36921;
