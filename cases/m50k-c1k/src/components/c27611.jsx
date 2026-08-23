import React from 'react';
const LABEL_27611 = 'component_27611';
export function Component27611({ value = 27611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27611, 'data-value': derived.doubled }, children);
}
export default Component27611;
