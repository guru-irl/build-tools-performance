import React from 'react';
const LABEL_16895 = 'component_16895';
export function Component16895({ value = 16895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16895, 'data-value': derived.doubled }, children);
}
export default Component16895;
