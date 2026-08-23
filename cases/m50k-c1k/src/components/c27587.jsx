import React from 'react';
const LABEL_27587 = 'component_27587';
export function Component27587({ value = 27587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27587, 'data-value': derived.doubled }, children);
}
export default Component27587;
