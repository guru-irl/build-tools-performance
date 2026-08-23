import React from 'react';
const LABEL_23478 = 'component_23478';
export function Component23478({ value = 23478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23478, 'data-value': derived.doubled }, children);
}
export default Component23478;
