import React from 'react';
const LABEL_29610 = 'component_29610';
export function Component29610({ value = 29610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29610, 'data-value': derived.doubled }, children);
}
export default Component29610;
