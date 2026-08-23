import React from 'react';
const LABEL_27751 = 'component_27751';
export function Component27751({ value = 27751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27751, 'data-value': derived.doubled }, children);
}
export default Component27751;
