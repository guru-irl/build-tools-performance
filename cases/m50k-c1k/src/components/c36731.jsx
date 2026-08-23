import React from 'react';
const LABEL_36731 = 'component_36731';
export function Component36731({ value = 36731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36731, 'data-value': derived.doubled }, children);
}
export default Component36731;
