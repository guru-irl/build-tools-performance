import React from 'react';
const LABEL_23742 = 'component_23742';
export function Component23742({ value = 23742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23742, 'data-value': derived.doubled }, children);
}
export default Component23742;
