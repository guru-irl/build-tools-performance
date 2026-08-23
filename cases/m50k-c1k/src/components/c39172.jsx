import React from 'react';
const LABEL_39172 = 'component_39172';
export function Component39172({ value = 39172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39172, 'data-value': derived.doubled }, children);
}
export default Component39172;
