import React from 'react';
const LABEL_20154 = 'component_20154';
export function Component20154({ value = 20154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20154, 'data-value': derived.doubled }, children);
}
export default Component20154;
