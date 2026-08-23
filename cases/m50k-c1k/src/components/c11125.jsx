import React from 'react';
const LABEL_11125 = 'component_11125';
export function Component11125({ value = 11125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11125, 'data-value': derived.doubled }, children);
}
export default Component11125;
