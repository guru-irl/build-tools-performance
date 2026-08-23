import React from 'react';
const LABEL_10211 = 'component_10211';
export function Component10211({ value = 10211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10211, 'data-value': derived.doubled }, children);
}
export default Component10211;
