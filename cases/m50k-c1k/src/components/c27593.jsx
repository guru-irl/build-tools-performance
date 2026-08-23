import React from 'react';
const LABEL_27593 = 'component_27593';
export function Component27593({ value = 27593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27593, 'data-value': derived.doubled }, children);
}
export default Component27593;
