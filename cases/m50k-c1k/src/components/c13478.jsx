import React from 'react';
const LABEL_13478 = 'component_13478';
export function Component13478({ value = 13478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13478, 'data-value': derived.doubled }, children);
}
export default Component13478;
