import React from 'react';
const LABEL_40599 = 'component_40599';
export function Component40599({ value = 40599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40599, 'data-value': derived.doubled }, children);
}
export default Component40599;
