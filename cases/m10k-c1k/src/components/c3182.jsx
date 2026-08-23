import React from 'react';
const LABEL_3182 = 'component_3182';
export function Component3182({ value = 3182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3182, 'data-value': derived.doubled }, children);
}
export default Component3182;
