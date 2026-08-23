import React from 'react';
const LABEL_27193 = 'component_27193';
export function Component27193({ value = 27193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27193, 'data-value': derived.doubled }, children);
}
export default Component27193;
