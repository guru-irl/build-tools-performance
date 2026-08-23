import React from 'react';
const LABEL_28888 = 'component_28888';
export function Component28888({ value = 28888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28888, 'data-value': derived.doubled }, children);
}
export default Component28888;
