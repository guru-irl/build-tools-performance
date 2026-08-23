import React from 'react';
const LABEL_10031 = 'component_10031';
export function Component10031({ value = 10031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10031, 'data-value': derived.doubled }, children);
}
export default Component10031;
