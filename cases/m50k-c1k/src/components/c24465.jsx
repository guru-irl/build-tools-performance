import React from 'react';
const LABEL_24465 = 'component_24465';
export function Component24465({ value = 24465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24465, 'data-value': derived.doubled }, children);
}
export default Component24465;
