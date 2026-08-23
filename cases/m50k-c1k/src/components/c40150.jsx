import React from 'react';
const LABEL_40150 = 'component_40150';
export function Component40150({ value = 40150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40150, 'data-value': derived.doubled }, children);
}
export default Component40150;
