import React from 'react';
const LABEL_22638 = 'component_22638';
export function Component22638({ value = 22638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22638, 'data-value': derived.doubled }, children);
}
export default Component22638;
