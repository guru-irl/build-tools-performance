import React from 'react';
const LABEL_32117 = 'component_32117';
export function Component32117({ value = 32117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32117, 'data-value': derived.doubled }, children);
}
export default Component32117;
