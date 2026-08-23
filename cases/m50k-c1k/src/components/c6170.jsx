import React from 'react';
const LABEL_6170 = 'component_6170';
export function Component6170({ value = 6170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6170, 'data-value': derived.doubled }, children);
}
export default Component6170;
