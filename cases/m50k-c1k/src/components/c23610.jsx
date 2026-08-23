import React from 'react';
const LABEL_23610 = 'component_23610';
export function Component23610({ value = 23610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23610, 'data-value': derived.doubled }, children);
}
export default Component23610;
