import React from 'react';
const LABEL_23877 = 'component_23877';
export function Component23877({ value = 23877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23877, 'data-value': derived.doubled }, children);
}
export default Component23877;
