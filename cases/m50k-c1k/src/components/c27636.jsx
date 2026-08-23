import React from 'react';
const LABEL_27636 = 'component_27636';
export function Component27636({ value = 27636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27636, 'data-value': derived.doubled }, children);
}
export default Component27636;
