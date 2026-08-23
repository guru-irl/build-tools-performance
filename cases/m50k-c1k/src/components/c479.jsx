import React from 'react';
const LABEL_479 = 'component_479';
export function Component479({ value = 479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_479, 'data-value': derived.doubled }, children);
}
export default Component479;
