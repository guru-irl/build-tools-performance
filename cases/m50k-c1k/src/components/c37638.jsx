import React from 'react';
const LABEL_37638 = 'component_37638';
export function Component37638({ value = 37638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37638, 'data-value': derived.doubled }, children);
}
export default Component37638;
