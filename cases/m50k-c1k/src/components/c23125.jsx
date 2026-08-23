import React from 'react';
const LABEL_23125 = 'component_23125';
export function Component23125({ value = 23125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23125, 'data-value': derived.doubled }, children);
}
export default Component23125;
