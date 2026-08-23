import React from 'react';
const LABEL_1742 = 'component_1742';
export function Component1742({ value = 1742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1742, 'data-value': derived.doubled }, children);
}
export default Component1742;
