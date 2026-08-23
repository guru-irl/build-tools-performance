import React from 'react';
const LABEL_33283 = 'component_33283';
export function Component33283({ value = 33283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33283, 'data-value': derived.doubled }, children);
}
export default Component33283;
