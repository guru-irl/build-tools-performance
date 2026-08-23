import React from 'react';
const LABEL_22594 = 'component_22594';
export function Component22594({ value = 22594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22594, 'data-value': derived.doubled }, children);
}
export default Component22594;
