import React from 'react';
const LABEL_27202 = 'component_27202';
export function Component27202({ value = 27202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27202, 'data-value': derived.doubled }, children);
}
export default Component27202;
