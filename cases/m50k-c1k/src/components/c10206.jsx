import React from 'react';
const LABEL_10206 = 'component_10206';
export function Component10206({ value = 10206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10206, 'data-value': derived.doubled }, children);
}
export default Component10206;
