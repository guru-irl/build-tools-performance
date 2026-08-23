import React from 'react';
const LABEL_21704 = 'component_21704';
export function Component21704({ value = 21704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21704, 'data-value': derived.doubled }, children);
}
export default Component21704;
