import React from 'react';
const LABEL_1778 = 'component_1778';
export function Component1778({ value = 1778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1778, 'data-value': derived.doubled }, children);
}
export default Component1778;
