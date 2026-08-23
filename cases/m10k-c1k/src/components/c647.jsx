import React from 'react';
const LABEL_647 = 'component_647';
export function Component647({ value = 647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_647, 'data-value': derived.doubled }, children);
}
export default Component647;
