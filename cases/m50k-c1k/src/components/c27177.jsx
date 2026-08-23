import React from 'react';
const LABEL_27177 = 'component_27177';
export function Component27177({ value = 27177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27177, 'data-value': derived.doubled }, children);
}
export default Component27177;
