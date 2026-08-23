import React from 'react';
const LABEL_34617 = 'component_34617';
export function Component34617({ value = 34617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34617, 'data-value': derived.doubled }, children);
}
export default Component34617;
