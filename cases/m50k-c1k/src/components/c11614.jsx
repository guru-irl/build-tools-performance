import React from 'react';
const LABEL_11614 = 'component_11614';
export function Component11614({ value = 11614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11614, 'data-value': derived.doubled }, children);
}
export default Component11614;
