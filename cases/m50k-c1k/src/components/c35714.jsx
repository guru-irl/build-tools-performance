import React from 'react';
const LABEL_35714 = 'component_35714';
export function Component35714({ value = 35714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35714, 'data-value': derived.doubled }, children);
}
export default Component35714;
