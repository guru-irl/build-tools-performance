import React from 'react';
const LABEL_27990 = 'component_27990';
export function Component27990({ value = 27990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27990, 'data-value': derived.doubled }, children);
}
export default Component27990;
