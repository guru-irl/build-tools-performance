import React from 'react';
const LABEL_36266 = 'component_36266';
export function Component36266({ value = 36266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36266, 'data-value': derived.doubled }, children);
}
export default Component36266;
