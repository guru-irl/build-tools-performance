import React from 'react';
const LABEL_40004 = 'component_40004';
export function Component40004({ value = 40004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40004, 'data-value': derived.doubled }, children);
}
export default Component40004;
