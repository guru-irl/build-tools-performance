import React from 'react';
const LABEL_27816 = 'component_27816';
export function Component27816({ value = 27816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27816, 'data-value': derived.doubled }, children);
}
export default Component27816;
