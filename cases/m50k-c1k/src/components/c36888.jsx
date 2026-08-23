import React from 'react';
const LABEL_36888 = 'component_36888';
export function Component36888({ value = 36888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36888, 'data-value': derived.doubled }, children);
}
export default Component36888;
