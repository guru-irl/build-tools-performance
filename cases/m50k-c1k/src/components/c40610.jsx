import React from 'react';
const LABEL_40610 = 'component_40610';
export function Component40610({ value = 40610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40610, 'data-value': derived.doubled }, children);
}
export default Component40610;
