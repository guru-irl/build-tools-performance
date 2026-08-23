import React from 'react';
const LABEL_31732 = 'component_31732';
export function Component31732({ value = 31732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31732, 'data-value': derived.doubled }, children);
}
export default Component31732;
