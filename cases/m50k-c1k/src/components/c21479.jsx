import React from 'react';
const LABEL_21479 = 'component_21479';
export function Component21479({ value = 21479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21479, 'data-value': derived.doubled }, children);
}
export default Component21479;
