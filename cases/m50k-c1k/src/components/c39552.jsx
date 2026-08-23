import React from 'react';
const LABEL_39552 = 'component_39552';
export function Component39552({ value = 39552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39552, 'data-value': derived.doubled }, children);
}
export default Component39552;
