import React from 'react';
const LABEL_18398 = 'component_18398';
export function Component18398({ value = 18398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18398, 'data-value': derived.doubled }, children);
}
export default Component18398;
