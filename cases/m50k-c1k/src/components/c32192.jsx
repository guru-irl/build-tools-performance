import React from 'react';
const LABEL_32192 = 'component_32192';
export function Component32192({ value = 32192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32192, 'data-value': derived.doubled }, children);
}
export default Component32192;
