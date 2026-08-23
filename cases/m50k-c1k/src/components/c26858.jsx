import React from 'react';
const LABEL_26858 = 'component_26858';
export function Component26858({ value = 26858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26858, 'data-value': derived.doubled }, children);
}
export default Component26858;
