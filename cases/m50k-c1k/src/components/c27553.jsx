import React from 'react';
const LABEL_27553 = 'component_27553';
export function Component27553({ value = 27553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27553, 'data-value': derived.doubled }, children);
}
export default Component27553;
