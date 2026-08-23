import React from 'react';
const LABEL_27325 = 'component_27325';
export function Component27325({ value = 27325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27325, 'data-value': derived.doubled }, children);
}
export default Component27325;
