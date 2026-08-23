import React from 'react';
const LABEL_36037 = 'component_36037';
export function Component36037({ value = 36037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36037, 'data-value': derived.doubled }, children);
}
export default Component36037;
