import React from 'react';
const LABEL_8599 = 'component_8599';
export function Component8599({ value = 8599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8599, 'data-value': derived.doubled }, children);
}
export default Component8599;
