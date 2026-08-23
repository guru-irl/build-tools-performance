import React from 'react';
const LABEL_21742 = 'component_21742';
export function Component21742({ value = 21742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21742, 'data-value': derived.doubled }, children);
}
export default Component21742;
