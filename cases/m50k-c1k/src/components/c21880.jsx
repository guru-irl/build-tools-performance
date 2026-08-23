import React from 'react';
const LABEL_21880 = 'component_21880';
export function Component21880({ value = 21880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21880, 'data-value': derived.doubled }, children);
}
export default Component21880;
