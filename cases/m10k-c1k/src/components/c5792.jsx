import React from 'react';
const LABEL_5792 = 'component_5792';
export function Component5792({ value = 5792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5792, 'data-value': derived.doubled }, children);
}
export default Component5792;
