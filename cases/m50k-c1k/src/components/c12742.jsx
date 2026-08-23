import React from 'react';
const LABEL_12742 = 'component_12742';
export function Component12742({ value = 12742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12742, 'data-value': derived.doubled }, children);
}
export default Component12742;
