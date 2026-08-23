import React from 'react';
const LABEL_27402 = 'component_27402';
export function Component27402({ value = 27402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27402, 'data-value': derived.doubled }, children);
}
export default Component27402;
