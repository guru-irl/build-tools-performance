import React from 'react';
const LABEL_3614 = 'component_3614';
export function Component3614({ value = 3614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3614, 'data-value': derived.doubled }, children);
}
export default Component3614;
