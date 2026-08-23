import React from 'react';
const LABEL_27470 = 'component_27470';
export function Component27470({ value = 27470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27470, 'data-value': derived.doubled }, children);
}
export default Component27470;
