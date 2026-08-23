import React from 'react';
const LABEL_10594 = 'component_10594';
export function Component10594({ value = 10594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10594, 'data-value': derived.doubled }, children);
}
export default Component10594;
