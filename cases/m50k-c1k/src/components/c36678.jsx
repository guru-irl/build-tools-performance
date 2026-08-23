import React from 'react';
const LABEL_36678 = 'component_36678';
export function Component36678({ value = 36678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36678, 'data-value': derived.doubled }, children);
}
export default Component36678;
