import React from 'react';
const LABEL_28792 = 'component_28792';
export function Component28792({ value = 28792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28792, 'data-value': derived.doubled }, children);
}
export default Component28792;
