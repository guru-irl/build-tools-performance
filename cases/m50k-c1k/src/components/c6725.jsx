import React from 'react';
const LABEL_6725 = 'component_6725';
export function Component6725({ value = 6725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6725, 'data-value': derived.doubled }, children);
}
export default Component6725;
