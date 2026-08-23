import React from 'react';
const LABEL_3009 = 'component_3009';
export function Component3009({ value = 3009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3009, 'data-value': derived.doubled }, children);
}
export default Component3009;
