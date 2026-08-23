import React from 'react';
const LABEL_33421 = 'component_33421';
export function Component33421({ value = 33421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33421, 'data-value': derived.doubled }, children);
}
export default Component33421;
