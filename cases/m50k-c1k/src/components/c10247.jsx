import React from 'react';
const LABEL_10247 = 'component_10247';
export function Component10247({ value = 10247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10247, 'data-value': derived.doubled }, children);
}
export default Component10247;
