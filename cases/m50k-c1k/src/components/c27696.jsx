import React from 'react';
const LABEL_27696 = 'component_27696';
export function Component27696({ value = 27696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27696, 'data-value': derived.doubled }, children);
}
export default Component27696;
