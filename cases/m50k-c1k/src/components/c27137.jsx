import React from 'react';
const LABEL_27137 = 'component_27137';
export function Component27137({ value = 27137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27137, 'data-value': derived.doubled }, children);
}
export default Component27137;
