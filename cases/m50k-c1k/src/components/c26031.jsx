import React from 'react';
const LABEL_26031 = 'component_26031';
export function Component26031({ value = 26031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26031, 'data-value': derived.doubled }, children);
}
export default Component26031;
