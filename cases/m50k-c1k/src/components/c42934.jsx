import React from 'react';
const LABEL_42934 = 'component_42934';
export function Component42934({ value = 42934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42934, 'data-value': derived.doubled }, children);
}
export default Component42934;
