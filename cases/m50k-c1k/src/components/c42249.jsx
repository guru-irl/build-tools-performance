import React from 'react';
const LABEL_42249 = 'component_42249';
export function Component42249({ value = 42249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42249, 'data-value': derived.doubled }, children);
}
export default Component42249;
