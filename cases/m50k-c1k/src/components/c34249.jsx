import React from 'react';
const LABEL_34249 = 'component_34249';
export function Component34249({ value = 34249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34249, 'data-value': derived.doubled }, children);
}
export default Component34249;
