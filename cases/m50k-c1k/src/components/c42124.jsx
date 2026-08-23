import React from 'react';
const LABEL_42124 = 'component_42124';
export function Component42124({ value = 42124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42124, 'data-value': derived.doubled }, children);
}
export default Component42124;
