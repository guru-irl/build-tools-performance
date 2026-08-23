import React from 'react';
const LABEL_27808 = 'component_27808';
export function Component27808({ value = 27808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27808, 'data-value': derived.doubled }, children);
}
export default Component27808;
