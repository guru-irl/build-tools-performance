import React from 'react';
const LABEL_39594 = 'component_39594';
export function Component39594({ value = 39594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39594, 'data-value': derived.doubled }, children);
}
export default Component39594;
