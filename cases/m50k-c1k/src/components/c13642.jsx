import React from 'react';
const LABEL_13642 = 'component_13642';
export function Component13642({ value = 13642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13642, 'data-value': derived.doubled }, children);
}
export default Component13642;
