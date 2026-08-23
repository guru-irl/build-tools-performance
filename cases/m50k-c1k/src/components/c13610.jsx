import React from 'react';
const LABEL_13610 = 'component_13610';
export function Component13610({ value = 13610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13610, 'data-value': derived.doubled }, children);
}
export default Component13610;
