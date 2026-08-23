import React from 'react';
const LABEL_4951 = 'component_4951';
export function Component4951({ value = 4951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4951, 'data-value': derived.doubled }, children);
}
export default Component4951;
