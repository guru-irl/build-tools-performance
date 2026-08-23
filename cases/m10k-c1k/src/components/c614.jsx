import React from 'react';
const LABEL_614 = 'component_614';
export function Component614({ value = 614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_614, 'data-value': derived.doubled }, children);
}
export default Component614;
