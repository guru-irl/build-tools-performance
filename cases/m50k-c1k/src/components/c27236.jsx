import React from 'react';
const LABEL_27236 = 'component_27236';
export function Component27236({ value = 27236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27236, 'data-value': derived.doubled }, children);
}
export default Component27236;
