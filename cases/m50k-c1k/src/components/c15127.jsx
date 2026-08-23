import React from 'react';
const LABEL_15127 = 'component_15127';
export function Component15127({ value = 15127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15127, 'data-value': derived.doubled }, children);
}
export default Component15127;
