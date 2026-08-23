import React from 'react';
const LABEL_36751 = 'component_36751';
export function Component36751({ value = 36751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36751, 'data-value': derived.doubled }, children);
}
export default Component36751;
