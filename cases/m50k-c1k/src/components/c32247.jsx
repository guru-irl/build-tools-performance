import React from 'react';
const LABEL_32247 = 'component_32247';
export function Component32247({ value = 32247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32247, 'data-value': derived.doubled }, children);
}
export default Component32247;
