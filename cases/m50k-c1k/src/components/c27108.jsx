import React from 'react';
const LABEL_27108 = 'component_27108';
export function Component27108({ value = 27108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27108, 'data-value': derived.doubled }, children);
}
export default Component27108;
