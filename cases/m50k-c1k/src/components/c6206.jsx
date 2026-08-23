import React from 'react';
const LABEL_6206 = 'component_6206';
export function Component6206({ value = 6206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6206, 'data-value': derived.doubled }, children);
}
export default Component6206;
