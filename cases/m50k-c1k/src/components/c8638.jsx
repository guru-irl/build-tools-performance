import React from 'react';
const LABEL_8638 = 'component_8638';
export function Component8638({ value = 8638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8638, 'data-value': derived.doubled }, children);
}
export default Component8638;
