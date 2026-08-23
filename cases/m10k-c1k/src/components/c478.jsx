import React from 'react';
const LABEL_478 = 'component_478';
export function Component478({ value = 478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_478, 'data-value': derived.doubled }, children);
}
export default Component478;
