import React from 'react';
const LABEL_27097 = 'component_27097';
export function Component27097({ value = 27097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27097, 'data-value': derived.doubled }, children);
}
export default Component27097;
