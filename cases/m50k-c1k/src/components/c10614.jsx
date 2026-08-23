import React from 'react';
const LABEL_10614 = 'component_10614';
export function Component10614({ value = 10614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10614, 'data-value': derived.doubled }, children);
}
export default Component10614;
