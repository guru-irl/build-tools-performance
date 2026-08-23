import React from 'react';
const LABEL_21211 = 'component_21211';
export function Component21211({ value = 21211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21211, 'data-value': derived.doubled }, children);
}
export default Component21211;
