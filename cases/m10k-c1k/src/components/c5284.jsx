import React from 'react';
const LABEL_5284 = 'component_5284';
export function Component5284({ value = 5284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5284, 'data-value': derived.doubled }, children);
}
export default Component5284;
