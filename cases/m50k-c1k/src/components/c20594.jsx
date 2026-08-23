import React from 'react';
const LABEL_20594 = 'component_20594';
export function Component20594({ value = 20594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20594, 'data-value': derived.doubled }, children);
}
export default Component20594;
