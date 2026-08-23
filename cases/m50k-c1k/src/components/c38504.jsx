import React from 'react';
const LABEL_38504 = 'component_38504';
export function Component38504({ value = 38504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38504, 'data-value': derived.doubled }, children);
}
export default Component38504;
