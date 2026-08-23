import React from 'react';
const LABEL_3151 = 'component_3151';
export function Component3151({ value = 3151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3151, 'data-value': derived.doubled }, children);
}
export default Component3151;
