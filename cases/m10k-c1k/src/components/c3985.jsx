import React from 'react';
const LABEL_3985 = 'component_3985';
export function Component3985({ value = 3985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3985, 'data-value': derived.doubled }, children);
}
export default Component3985;
