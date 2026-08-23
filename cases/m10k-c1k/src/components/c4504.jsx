import React from 'react';
const LABEL_4504 = 'component_4504';
export function Component4504({ value = 4504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4504, 'data-value': derived.doubled }, children);
}
export default Component4504;
