import React from 'react';
const LABEL_22018 = 'component_22018';
export function Component22018({ value = 22018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22018, 'data-value': derived.doubled }, children);
}
export default Component22018;
