import React from 'react';
const LABEL_27652 = 'component_27652';
export function Component27652({ value = 27652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27652, 'data-value': derived.doubled }, children);
}
export default Component27652;
