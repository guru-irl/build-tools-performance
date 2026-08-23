import React from 'react';
const LABEL_27080 = 'component_27080';
export function Component27080({ value = 27080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27080, 'data-value': derived.doubled }, children);
}
export default Component27080;
