import React from 'react';
const LABEL_39247 = 'component_39247';
export function Component39247({ value = 39247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39247, 'data-value': derived.doubled }, children);
}
export default Component39247;
