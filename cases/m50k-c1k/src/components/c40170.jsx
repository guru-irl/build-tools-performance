import React from 'react';
const LABEL_40170 = 'component_40170';
export function Component40170({ value = 40170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40170, 'data-value': derived.doubled }, children);
}
export default Component40170;
