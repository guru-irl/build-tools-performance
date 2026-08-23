import React from 'react';
const LABEL_3742 = 'component_3742';
export function Component3742({ value = 3742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3742, 'data-value': derived.doubled }, children);
}
export default Component3742;
