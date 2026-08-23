import React from 'react';
const LABEL_4610 = 'component_4610';
export function Component4610({ value = 4610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4610, 'data-value': derived.doubled }, children);
}
export default Component4610;
