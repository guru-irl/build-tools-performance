import React from 'react';
const LABEL_23211 = 'component_23211';
export function Component23211({ value = 23211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23211, 'data-value': derived.doubled }, children);
}
export default Component23211;
