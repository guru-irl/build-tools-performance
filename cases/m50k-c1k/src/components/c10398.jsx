import React from 'react';
const LABEL_10398 = 'component_10398';
export function Component10398({ value = 10398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10398, 'data-value': derived.doubled }, children);
}
export default Component10398;
