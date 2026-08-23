import React from 'react';
const LABEL_13638 = 'component_13638';
export function Component13638({ value = 13638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13638, 'data-value': derived.doubled }, children);
}
export default Component13638;
