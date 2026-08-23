import React from 'react';
const LABEL_27146 = 'component_27146';
export function Component27146({ value = 27146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27146, 'data-value': derived.doubled }, children);
}
export default Component27146;
