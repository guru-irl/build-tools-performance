import React from 'react';
const LABEL_32600 = 'component_32600';
export function Component32600({ value = 32600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32600, 'data-value': derived.doubled }, children);
}
export default Component32600;
