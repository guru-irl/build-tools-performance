import React from 'react';
const LABEL_21528 = 'component_21528';
export function Component21528({ value = 21528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21528, 'data-value': derived.doubled }, children);
}
export default Component21528;
