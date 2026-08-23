import React from 'react';
const LABEL_42007 = 'component_42007';
export function Component42007({ value = 42007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42007, 'data-value': derived.doubled }, children);
}
export default Component42007;
