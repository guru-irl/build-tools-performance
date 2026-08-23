import React from 'react';
const LABEL_23678 = 'component_23678';
export function Component23678({ value = 23678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23678, 'data-value': derived.doubled }, children);
}
export default Component23678;
