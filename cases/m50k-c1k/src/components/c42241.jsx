import React from 'react';
const LABEL_42241 = 'component_42241';
export function Component42241({ value = 42241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42241, 'data-value': derived.doubled }, children);
}
export default Component42241;
