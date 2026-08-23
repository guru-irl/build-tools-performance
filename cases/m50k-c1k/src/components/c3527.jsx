import React from 'react';
const LABEL_3527 = 'component_3527';
export function Component3527({ value = 3527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3527, 'data-value': derived.doubled }, children);
}
export default Component3527;
