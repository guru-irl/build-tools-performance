import React from 'react';
const LABEL_6644 = 'component_6644';
export function Component6644({ value = 6644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6644, 'data-value': derived.doubled }, children);
}
export default Component6644;
