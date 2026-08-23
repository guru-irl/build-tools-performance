import React from 'react';
const LABEL_28599 = 'component_28599';
export function Component28599({ value = 28599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28599, 'data-value': derived.doubled }, children);
}
export default Component28599;
