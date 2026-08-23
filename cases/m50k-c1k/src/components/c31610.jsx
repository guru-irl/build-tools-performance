import React from 'react';
const LABEL_31610 = 'component_31610';
export function Component31610({ value = 31610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31610, 'data-value': derived.doubled }, children);
}
export default Component31610;
