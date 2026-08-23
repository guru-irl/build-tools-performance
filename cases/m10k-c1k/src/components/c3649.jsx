import React from 'react';
const LABEL_3649 = 'component_3649';
export function Component3649({ value = 3649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3649, 'data-value': derived.doubled }, children);
}
export default Component3649;
