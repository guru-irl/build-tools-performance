import React from 'react';
const LABEL_13594 = 'component_13594';
export function Component13594({ value = 13594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13594, 'data-value': derived.doubled }, children);
}
export default Component13594;
