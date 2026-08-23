import React from 'react';
const LABEL_4990 = 'component_4990';
export function Component4990({ value = 4990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4990, 'data-value': derived.doubled }, children);
}
export default Component4990;
