import React from 'react';
const LABEL_27875 = 'component_27875';
export function Component27875({ value = 27875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27875, 'data-value': derived.doubled }, children);
}
export default Component27875;
