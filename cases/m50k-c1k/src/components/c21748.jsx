import React from 'react';
const LABEL_21748 = 'component_21748';
export function Component21748({ value = 21748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21748, 'data-value': derived.doubled }, children);
}
export default Component21748;
