import React from 'react';
const LABEL_32409 = 'component_32409';
export function Component32409({ value = 32409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32409, 'data-value': derived.doubled }, children);
}
export default Component32409;
