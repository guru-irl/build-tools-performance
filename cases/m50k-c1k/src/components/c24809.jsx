import React from 'react';
const LABEL_24809 = 'component_24809';
export function Component24809({ value = 24809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24809, 'data-value': derived.doubled }, children);
}
export default Component24809;
