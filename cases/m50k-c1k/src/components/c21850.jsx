import React from 'react';
const LABEL_21850 = 'component_21850';
export function Component21850({ value = 21850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21850, 'data-value': derived.doubled }, children);
}
export default Component21850;
