import React from 'react';
const LABEL_678 = 'component_678';
export function Component678({ value = 678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_678, 'data-value': derived.doubled }, children);
}
export default Component678;
