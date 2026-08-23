import React from 'react';
const LABEL_27786 = 'component_27786';
export function Component27786({ value = 27786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27786, 'data-value': derived.doubled }, children);
}
export default Component27786;
