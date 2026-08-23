import React from 'react';
const LABEL_27832 = 'component_27832';
export function Component27832({ value = 27832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27832, 'data-value': derived.doubled }, children);
}
export default Component27832;
