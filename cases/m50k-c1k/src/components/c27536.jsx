import React from 'react';
const LABEL_27536 = 'component_27536';
export function Component27536({ value = 27536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27536, 'data-value': derived.doubled }, children);
}
export default Component27536;
