import React from 'react';
const LABEL_3504 = 'component_3504';
export function Component3504({ value = 3504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3504, 'data-value': derived.doubled }, children);
}
export default Component3504;
