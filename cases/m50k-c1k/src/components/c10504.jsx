import React from 'react';
const LABEL_10504 = 'component_10504';
export function Component10504({ value = 10504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10504, 'data-value': derived.doubled }, children);
}
export default Component10504;
