import React from 'react';
const LABEL_22104 = 'component_22104';
export function Component22104({ value = 22104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22104, 'data-value': derived.doubled }, children);
}
export default Component22104;
