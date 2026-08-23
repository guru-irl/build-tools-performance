import React from 'react';
const LABEL_21480 = 'component_21480';
export function Component21480({ value = 21480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21480, 'data-value': derived.doubled }, children);
}
export default Component21480;
