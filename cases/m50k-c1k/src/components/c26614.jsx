import React from 'react';
const LABEL_26614 = 'component_26614';
export function Component26614({ value = 26614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26614, 'data-value': derived.doubled }, children);
}
export default Component26614;
