import React from 'react';
const LABEL_38614 = 'component_38614';
export function Component38614({ value = 38614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38614, 'data-value': derived.doubled }, children);
}
export default Component38614;
