import React from 'react';
const LABEL_27062 = 'component_27062';
export function Component27062({ value = 27062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27062, 'data-value': derived.doubled }, children);
}
export default Component27062;
