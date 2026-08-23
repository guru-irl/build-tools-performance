import React from 'react';
const LABEL_590 = 'component_590';
export function Component590({ value = 590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_590, 'data-value': derived.doubled }, children);
}
export default Component590;
