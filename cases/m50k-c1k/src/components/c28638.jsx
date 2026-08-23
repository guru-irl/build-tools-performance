import React from 'react';
const LABEL_28638 = 'component_28638';
export function Component28638({ value = 28638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28638, 'data-value': derived.doubled }, children);
}
export default Component28638;
