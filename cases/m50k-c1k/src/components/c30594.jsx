import React from 'react';
const LABEL_30594 = 'component_30594';
export function Component30594({ value = 30594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30594, 'data-value': derived.doubled }, children);
}
export default Component30594;
