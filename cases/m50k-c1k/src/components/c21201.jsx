import React from 'react';
const LABEL_21201 = 'component_21201';
export function Component21201({ value = 21201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21201, 'data-value': derived.doubled }, children);
}
export default Component21201;
