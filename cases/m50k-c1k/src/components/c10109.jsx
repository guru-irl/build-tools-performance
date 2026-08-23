import React from 'react';
const LABEL_10109 = 'component_10109';
export function Component10109({ value = 10109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10109, 'data-value': derived.doubled }, children);
}
export default Component10109;
