import React from 'react';
const LABEL_26065 = 'component_26065';
export function Component26065({ value = 26065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26065, 'data-value': derived.doubled }, children);
}
export default Component26065;
