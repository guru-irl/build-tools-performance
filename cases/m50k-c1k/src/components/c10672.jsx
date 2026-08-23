import React from 'react';
const LABEL_10672 = 'component_10672';
export function Component10672({ value = 10672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10672, 'data-value': derived.doubled }, children);
}
export default Component10672;
