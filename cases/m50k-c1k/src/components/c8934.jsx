import React from 'react';
const LABEL_8934 = 'component_8934';
export function Component8934({ value = 8934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8934, 'data-value': derived.doubled }, children);
}
export default Component8934;
