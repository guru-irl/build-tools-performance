import React from 'react';
const LABEL_2610 = 'component_2610';
export function Component2610({ value = 2610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2610, 'data-value': derived.doubled }, children);
}
export default Component2610;
