import React from 'react';
const LABEL_30678 = 'component_30678';
export function Component30678({ value = 30678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30678, 'data-value': derived.doubled }, children);
}
export default Component30678;
