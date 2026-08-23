import React from 'react';
const LABEL_29149 = 'component_29149';
export function Component29149({ value = 29149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29149, 'data-value': derived.doubled }, children);
}
export default Component29149;
