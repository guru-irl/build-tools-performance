import React from 'react';
const LABEL_21109 = 'component_21109';
export function Component21109({ value = 21109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21109, 'data-value': derived.doubled }, children);
}
export default Component21109;
