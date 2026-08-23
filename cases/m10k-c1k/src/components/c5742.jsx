import React from 'react';
const LABEL_5742 = 'component_5742';
export function Component5742({ value = 5742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5742, 'data-value': derived.doubled }, children);
}
export default Component5742;
