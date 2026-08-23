import React from 'react';
const LABEL_21235 = 'component_21235';
export function Component21235({ value = 21235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21235, 'data-value': derived.doubled }, children);
}
export default Component21235;
