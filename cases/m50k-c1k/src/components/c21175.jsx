import React from 'react';
const LABEL_21175 = 'component_21175';
export function Component21175({ value = 21175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21175, 'data-value': derived.doubled }, children);
}
export default Component21175;
