import React from 'react';
const LABEL_15277 = 'component_15277';
export function Component15277({ value = 15277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15277, 'data-value': derived.doubled }, children);
}
export default Component15277;
