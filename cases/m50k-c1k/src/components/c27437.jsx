import React from 'react';
const LABEL_27437 = 'component_27437';
export function Component27437({ value = 27437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27437, 'data-value': derived.doubled }, children);
}
export default Component27437;
