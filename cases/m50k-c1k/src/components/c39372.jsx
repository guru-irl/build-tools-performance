import React from 'react';
const LABEL_39372 = 'component_39372';
export function Component39372({ value = 39372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39372, 'data-value': derived.doubled }, children);
}
export default Component39372;
