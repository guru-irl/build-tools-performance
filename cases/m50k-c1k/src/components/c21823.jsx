import React from 'react';
const LABEL_21823 = 'component_21823';
export function Component21823({ value = 21823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21823, 'data-value': derived.doubled }, children);
}
export default Component21823;
