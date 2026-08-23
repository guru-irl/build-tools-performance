import React from 'react';
const LABEL_21771 = 'component_21771';
export function Component21771({ value = 21771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21771, 'data-value': derived.doubled }, children);
}
export default Component21771;
