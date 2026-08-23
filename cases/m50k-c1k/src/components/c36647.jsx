import React from 'react';
const LABEL_36647 = 'component_36647';
export function Component36647({ value = 36647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36647, 'data-value': derived.doubled }, children);
}
export default Component36647;
