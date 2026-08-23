import React from 'react';
const LABEL_792 = 'component_792';
export function Component792({ value = 792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_792, 'data-value': derived.doubled }, children);
}
export default Component792;
