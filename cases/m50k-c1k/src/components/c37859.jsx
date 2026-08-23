import React from 'react';
const LABEL_37859 = 'component_37859';
export function Component37859({ value = 37859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37859, 'data-value': derived.doubled }, children);
}
export default Component37859;
