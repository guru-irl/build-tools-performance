import React from 'react';
const LABEL_17594 = 'component_17594';
export function Component17594({ value = 17594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17594, 'data-value': derived.doubled }, children);
}
export default Component17594;
