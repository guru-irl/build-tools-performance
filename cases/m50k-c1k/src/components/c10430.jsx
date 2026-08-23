import React from 'react';
const LABEL_10430 = 'component_10430';
export function Component10430({ value = 10430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10430, 'data-value': derived.doubled }, children);
}
export default Component10430;
