import React from 'react';
const LABEL_28469 = 'component_28469';
export function Component28469({ value = 28469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28469, 'data-value': derived.doubled }, children);
}
export default Component28469;
