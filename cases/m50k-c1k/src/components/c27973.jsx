import React from 'react';
const LABEL_27973 = 'component_27973';
export function Component27973({ value = 27973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27973, 'data-value': derived.doubled }, children);
}
export default Component27973;
