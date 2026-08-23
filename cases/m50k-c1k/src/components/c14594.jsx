import React from 'react';
const LABEL_14594 = 'component_14594';
export function Component14594({ value = 14594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14594, 'data-value': derived.doubled }, children);
}
export default Component14594;
