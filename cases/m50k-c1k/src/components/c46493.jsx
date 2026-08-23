import React from 'react';
const LABEL_46493 = 'component_46493';
export function Component46493({ value = 46493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46493, 'data-value': derived.doubled }, children);
}
export default Component46493;
