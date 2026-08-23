import React from 'react';
const LABEL_27500 = 'component_27500';
export function Component27500({ value = 27500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27500, 'data-value': derived.doubled }, children);
}
export default Component27500;
