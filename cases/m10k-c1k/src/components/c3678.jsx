import React from 'react';
const LABEL_3678 = 'component_3678';
export function Component3678({ value = 3678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3678, 'data-value': derived.doubled }, children);
}
export default Component3678;
