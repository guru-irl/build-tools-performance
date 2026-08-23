import React from 'react';
const LABEL_16638 = 'component_16638';
export function Component16638({ value = 16638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16638, 'data-value': derived.doubled }, children);
}
export default Component16638;
