import React from 'react';
const LABEL_14342 = 'component_14342';
export function Component14342({ value = 14342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14342, 'data-value': derived.doubled }, children);
}
export default Component14342;
