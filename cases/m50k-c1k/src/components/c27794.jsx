import React from 'react';
const LABEL_27794 = 'component_27794';
export function Component27794({ value = 27794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27794, 'data-value': derived.doubled }, children);
}
export default Component27794;
