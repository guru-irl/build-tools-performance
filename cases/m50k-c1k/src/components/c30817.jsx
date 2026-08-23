import React from 'react';
const LABEL_30817 = 'component_30817';
export function Component30817({ value = 30817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30817, 'data-value': derived.doubled }, children);
}
export default Component30817;
