import React from 'react';
const LABEL_27179 = 'component_27179';
export function Component27179({ value = 27179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27179, 'data-value': derived.doubled }, children);
}
export default Component27179;
