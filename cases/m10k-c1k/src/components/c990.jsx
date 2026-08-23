import React from 'react';
const LABEL_990 = 'component_990';
export function Component990({ value = 990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_990, 'data-value': derived.doubled }, children);
}
export default Component990;
