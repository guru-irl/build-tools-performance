import React from 'react';
const LABEL_27907 = 'component_27907';
export function Component27907({ value = 27907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27907, 'data-value': derived.doubled }, children);
}
export default Component27907;
