import React from 'react';
const LABEL_11594 = 'component_11594';
export function Component11594({ value = 11594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11594, 'data-value': derived.doubled }, children);
}
export default Component11594;
