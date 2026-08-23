import React from 'react';
const LABEL_10154 = 'component_10154';
export function Component10154({ value = 10154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10154, 'data-value': derived.doubled }, children);
}
export default Component10154;
