import React from 'react';
const LABEL_21594 = 'component_21594';
export function Component21594({ value = 21594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21594, 'data-value': derived.doubled }, children);
}
export default Component21594;
