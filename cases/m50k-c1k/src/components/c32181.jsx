import React from 'react';
const LABEL_32181 = 'component_32181';
export function Component32181({ value = 32181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32181, 'data-value': derived.doubled }, children);
}
export default Component32181;
