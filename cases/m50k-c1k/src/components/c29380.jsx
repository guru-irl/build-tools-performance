import React from 'react';
const LABEL_29380 = 'component_29380';
export function Component29380({ value = 29380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29380, 'data-value': derived.doubled }, children);
}
export default Component29380;
