import React from 'react';
const LABEL_5610 = 'component_5610';
export function Component5610({ value = 5610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5610, 'data-value': derived.doubled }, children);
}
export default Component5610;
