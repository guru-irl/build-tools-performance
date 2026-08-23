import React from 'react';
const LABEL_21128 = 'component_21128';
export function Component21128({ value = 21128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21128, 'data-value': derived.doubled }, children);
}
export default Component21128;
