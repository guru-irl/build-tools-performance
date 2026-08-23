import React from 'react';
const LABEL_14132 = 'component_14132';
export function Component14132({ value = 14132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14132, 'data-value': derived.doubled }, children);
}
export default Component14132;
