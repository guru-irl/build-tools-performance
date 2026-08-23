import React from 'react';
const LABEL_33398 = 'component_33398';
export function Component33398({ value = 33398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33398, 'data-value': derived.doubled }, children);
}
export default Component33398;
