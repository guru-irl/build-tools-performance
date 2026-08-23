import React from 'react';
const LABEL_39625 = 'component_39625';
export function Component39625({ value = 39625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39625, 'data-value': derived.doubled }, children);
}
export default Component39625;
