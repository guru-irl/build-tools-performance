import React from 'react';
const LABEL_15950 = 'component_15950';
export function Component15950({ value = 15950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15950, 'data-value': derived.doubled }, children);
}
export default Component15950;
