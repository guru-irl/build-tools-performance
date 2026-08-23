import React from 'react';
const LABEL_39614 = 'component_39614';
export function Component39614({ value = 39614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39614, 'data-value': derived.doubled }, children);
}
export default Component39614;
