import React from 'react';
const LABEL_27648 = 'component_27648';
export function Component27648({ value = 27648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27648, 'data-value': derived.doubled }, children);
}
export default Component27648;
