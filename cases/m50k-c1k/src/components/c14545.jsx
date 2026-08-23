import React from 'react';
const LABEL_14545 = 'component_14545';
export function Component14545({ value = 14545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14545, 'data-value': derived.doubled }, children);
}
export default Component14545;
