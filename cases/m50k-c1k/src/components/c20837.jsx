import React from 'react';
const LABEL_20837 = 'component_20837';
export function Component20837({ value = 20837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20837, 'data-value': derived.doubled }, children);
}
export default Component20837;
