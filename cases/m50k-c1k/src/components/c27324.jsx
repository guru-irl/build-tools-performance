import React from 'react';
const LABEL_27324 = 'component_27324';
export function Component27324({ value = 27324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27324, 'data-value': derived.doubled }, children);
}
export default Component27324;
