import React from 'react';
const LABEL_26125 = 'component_26125';
export function Component26125({ value = 26125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26125, 'data-value': derived.doubled }, children);
}
export default Component26125;
