import React from 'react';
const LABEL_3478 = 'component_3478';
export function Component3478({ value = 3478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3478, 'data-value': derived.doubled }, children);
}
export default Component3478;
