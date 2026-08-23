import React from 'react';
const LABEL_20139 = 'component_20139';
export function Component20139({ value = 20139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20139, 'data-value': derived.doubled }, children);
}
export default Component20139;
