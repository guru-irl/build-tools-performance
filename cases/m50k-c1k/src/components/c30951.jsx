import React from 'react';
const LABEL_30951 = 'component_30951';
export function Component30951({ value = 30951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30951, 'data-value': derived.doubled }, children);
}
export default Component30951;
