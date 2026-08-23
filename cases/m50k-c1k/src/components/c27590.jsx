import React from 'react';
const LABEL_27590 = 'component_27590';
export function Component27590({ value = 27590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27590, 'data-value': derived.doubled }, children);
}
export default Component27590;
