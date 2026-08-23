import React from 'react';
const LABEL_27123 = 'component_27123';
export function Component27123({ value = 27123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27123, 'data-value': derived.doubled }, children);
}
export default Component27123;
