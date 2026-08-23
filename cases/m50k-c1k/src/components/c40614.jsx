import React from 'react';
const LABEL_40614 = 'component_40614';
export function Component40614({ value = 40614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40614, 'data-value': derived.doubled }, children);
}
export default Component40614;
