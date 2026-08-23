import React from 'react';
const LABEL_21801 = 'component_21801';
export function Component21801({ value = 21801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21801, 'data-value': derived.doubled }, children);
}
export default Component21801;
