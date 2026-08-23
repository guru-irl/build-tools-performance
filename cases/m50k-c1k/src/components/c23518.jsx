import React from 'react';
const LABEL_23518 = 'component_23518';
export function Component23518({ value = 23518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23518, 'data-value': derived.doubled }, children);
}
export default Component23518;
