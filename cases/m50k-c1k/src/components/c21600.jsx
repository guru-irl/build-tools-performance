import React from 'react';
const LABEL_21600 = 'component_21600';
export function Component21600({ value = 21600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21600, 'data-value': derived.doubled }, children);
}
export default Component21600;
