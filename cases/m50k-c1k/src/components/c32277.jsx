import React from 'react';
const LABEL_32277 = 'component_32277';
export function Component32277({ value = 32277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32277, 'data-value': derived.doubled }, children);
}
export default Component32277;
