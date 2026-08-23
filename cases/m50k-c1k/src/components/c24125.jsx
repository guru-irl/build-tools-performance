import React from 'react';
const LABEL_24125 = 'component_24125';
export function Component24125({ value = 24125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24125, 'data-value': derived.doubled }, children);
}
export default Component24125;
