import React from 'react';
const LABEL_22792 = 'component_22792';
export function Component22792({ value = 22792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22792, 'data-value': derived.doubled }, children);
}
export default Component22792;
