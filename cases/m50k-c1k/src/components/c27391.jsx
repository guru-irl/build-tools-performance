import React from 'react';
const LABEL_27391 = 'component_27391';
export function Component27391({ value = 27391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27391, 'data-value': derived.doubled }, children);
}
export default Component27391;
