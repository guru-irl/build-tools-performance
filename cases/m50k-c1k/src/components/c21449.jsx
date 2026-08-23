import React from 'react';
const LABEL_21449 = 'component_21449';
export function Component21449({ value = 21449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21449, 'data-value': derived.doubled }, children);
}
export default Component21449;
