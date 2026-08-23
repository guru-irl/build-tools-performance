import React from 'react';
const LABEL_22610 = 'component_22610';
export function Component22610({ value = 22610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22610, 'data-value': derived.doubled }, children);
}
export default Component22610;
