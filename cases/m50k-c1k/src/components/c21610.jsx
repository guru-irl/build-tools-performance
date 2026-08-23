import React from 'react';
const LABEL_21610 = 'component_21610';
export function Component21610({ value = 21610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21610, 'data-value': derived.doubled }, children);
}
export default Component21610;
