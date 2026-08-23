import React from 'react';
const LABEL_35149 = 'component_35149';
export function Component35149({ value = 35149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35149, 'data-value': derived.doubled }, children);
}
export default Component35149;
