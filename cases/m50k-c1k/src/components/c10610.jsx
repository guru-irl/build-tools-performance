import React from 'react';
const LABEL_10610 = 'component_10610';
export function Component10610({ value = 10610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10610, 'data-value': derived.doubled }, children);
}
export default Component10610;
