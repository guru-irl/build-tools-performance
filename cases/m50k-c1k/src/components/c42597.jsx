import React from 'react';
const LABEL_42597 = 'component_42597';
export function Component42597({ value = 42597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42597, 'data-value': derived.doubled }, children);
}
export default Component42597;
