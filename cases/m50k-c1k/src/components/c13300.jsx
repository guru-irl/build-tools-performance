import React from 'react';
const LABEL_13300 = 'component_13300';
export function Component13300({ value = 13300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13300, 'data-value': derived.doubled }, children);
}
export default Component13300;
