import React from 'react';
const LABEL_25206 = 'component_25206';
export function Component25206({ value = 25206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25206, 'data-value': derived.doubled }, children);
}
export default Component25206;
