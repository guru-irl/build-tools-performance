import React from 'react';
const LABEL_12479 = 'component_12479';
export function Component12479({ value = 12479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12479, 'data-value': derived.doubled }, children);
}
export default Component12479;
