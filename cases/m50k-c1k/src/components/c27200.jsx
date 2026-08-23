import React from 'react';
const LABEL_27200 = 'component_27200';
export function Component27200({ value = 27200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27200, 'data-value': derived.doubled }, children);
}
export default Component27200;
