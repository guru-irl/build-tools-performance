import React from 'react';
const LABEL_35206 = 'component_35206';
export function Component35206({ value = 35206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35206, 'data-value': derived.doubled }, children);
}
export default Component35206;
