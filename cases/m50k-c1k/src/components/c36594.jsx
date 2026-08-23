import React from 'react';
const LABEL_36594 = 'component_36594';
export function Component36594({ value = 36594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36594, 'data-value': derived.doubled }, children);
}
export default Component36594;
