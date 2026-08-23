import React from 'react';
const LABEL_6516 = 'component_6516';
export function Component6516({ value = 6516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6516, 'data-value': derived.doubled }, children);
}
export default Component6516;
