import React from 'react';
const LABEL_10990 = 'component_10990';
export function Component10990({ value = 10990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10990, 'data-value': derived.doubled }, children);
}
export default Component10990;
