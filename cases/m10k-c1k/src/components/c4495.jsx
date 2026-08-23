import React from 'react';
const LABEL_4495 = 'component_4495';
export function Component4495({ value = 4495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4495, 'data-value': derived.doubled }, children);
}
export default Component4495;
