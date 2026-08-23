import React from 'react';
const LABEL_15809 = 'component_15809';
export function Component15809({ value = 15809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15809, 'data-value': derived.doubled }, children);
}
export default Component15809;
