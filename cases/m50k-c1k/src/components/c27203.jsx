import React from 'react';
const LABEL_27203 = 'component_27203';
export function Component27203({ value = 27203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27203, 'data-value': derived.doubled }, children);
}
export default Component27203;
