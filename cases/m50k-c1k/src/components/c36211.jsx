import React from 'react';
const LABEL_36211 = 'component_36211';
export function Component36211({ value = 36211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36211, 'data-value': derived.doubled }, children);
}
export default Component36211;
