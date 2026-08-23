import React from 'react';
const LABEL_6742 = 'component_6742';
export function Component6742({ value = 6742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6742, 'data-value': derived.doubled }, children);
}
export default Component6742;
