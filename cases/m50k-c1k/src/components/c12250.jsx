import React from 'react';
const LABEL_12250 = 'component_12250';
export function Component12250({ value = 12250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12250, 'data-value': derived.doubled }, children);
}
export default Component12250;
