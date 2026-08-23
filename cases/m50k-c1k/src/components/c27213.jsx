import React from 'react';
const LABEL_27213 = 'component_27213';
export function Component27213({ value = 27213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27213, 'data-value': derived.doubled }, children);
}
export default Component27213;
