import React from 'react';
const LABEL_39678 = 'component_39678';
export function Component39678({ value = 39678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39678, 'data-value': derived.doubled }, children);
}
export default Component39678;
