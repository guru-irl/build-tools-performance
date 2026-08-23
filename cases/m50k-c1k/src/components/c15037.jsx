import React from 'react';
const LABEL_15037 = 'component_15037';
export function Component15037({ value = 15037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15037, 'data-value': derived.doubled }, children);
}
export default Component15037;
