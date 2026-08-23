import React from 'react';
const LABEL_12779 = 'component_12779';
export function Component12779({ value = 12779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12779, 'data-value': derived.doubled }, children);
}
export default Component12779;
