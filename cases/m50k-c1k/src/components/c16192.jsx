import React from 'react';
const LABEL_16192 = 'component_16192';
export function Component16192({ value = 16192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16192, 'data-value': derived.doubled }, children);
}
export default Component16192;
