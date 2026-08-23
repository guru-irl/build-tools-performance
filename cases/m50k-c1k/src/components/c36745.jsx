import React from 'react';
const LABEL_36745 = 'component_36745';
export function Component36745({ value = 36745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36745, 'data-value': derived.doubled }, children);
}
export default Component36745;
