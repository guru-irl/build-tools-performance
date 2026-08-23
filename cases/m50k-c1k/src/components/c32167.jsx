import React from 'react';
const LABEL_32167 = 'component_32167';
export function Component32167({ value = 32167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32167, 'data-value': derived.doubled }, children);
}
export default Component32167;
