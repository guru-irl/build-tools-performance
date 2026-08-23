import React from 'react';
const LABEL_27938 = 'component_27938';
export function Component27938({ value = 27938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27938, 'data-value': derived.doubled }, children);
}
export default Component27938;
