import React from 'react';
const LABEL_10284 = 'component_10284';
export function Component10284({ value = 10284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10284, 'data-value': derived.doubled }, children);
}
export default Component10284;
