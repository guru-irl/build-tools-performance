import React from 'react';
const LABEL_332 = 'component_332';
export function Component332({ value = 332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_332, 'data-value': derived.doubled }, children);
}
export default Component332;
