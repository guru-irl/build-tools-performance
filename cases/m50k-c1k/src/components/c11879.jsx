import React from 'react';
const LABEL_11879 = 'component_11879';
export function Component11879({ value = 11879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11879, 'data-value': derived.doubled }, children);
}
export default Component11879;
