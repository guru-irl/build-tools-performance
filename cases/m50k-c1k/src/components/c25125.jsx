import React from 'react';
const LABEL_25125 = 'component_25125';
export function Component25125({ value = 25125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25125, 'data-value': derived.doubled }, children);
}
export default Component25125;
