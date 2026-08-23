import React from 'react';
const LABEL_8792 = 'component_8792';
export function Component8792({ value = 8792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8792, 'data-value': derived.doubled }, children);
}
export default Component8792;
