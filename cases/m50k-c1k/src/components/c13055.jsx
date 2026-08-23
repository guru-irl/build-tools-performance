import React from 'react';
const LABEL_13055 = 'component_13055';
export function Component13055({ value = 13055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13055, 'data-value': derived.doubled }, children);
}
export default Component13055;
