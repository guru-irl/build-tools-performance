import React from 'react';
const LABEL_25326 = 'component_25326';
export function Component25326({ value = 25326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25326, 'data-value': derived.doubled }, children);
}
export default Component25326;
