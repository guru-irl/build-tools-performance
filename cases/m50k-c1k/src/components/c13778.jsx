import React from 'react';
const LABEL_13778 = 'component_13778';
export function Component13778({ value = 13778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13778, 'data-value': derived.doubled }, children);
}
export default Component13778;
