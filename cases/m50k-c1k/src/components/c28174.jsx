import React from 'react';
const LABEL_28174 = 'component_28174';
export function Component28174({ value = 28174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28174, 'data-value': derived.doubled }, children);
}
export default Component28174;
