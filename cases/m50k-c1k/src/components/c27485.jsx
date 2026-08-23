import React from 'react';
const LABEL_27485 = 'component_27485';
export function Component27485({ value = 27485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27485, 'data-value': derived.doubled }, children);
}
export default Component27485;
