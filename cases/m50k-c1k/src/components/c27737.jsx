import React from 'react';
const LABEL_27737 = 'component_27737';
export function Component27737({ value = 27737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27737, 'data-value': derived.doubled }, children);
}
export default Component27737;
