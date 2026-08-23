import React from 'react';
const LABEL_42416 = 'component_42416';
export function Component42416({ value = 42416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42416, 'data-value': derived.doubled }, children);
}
export default Component42416;
