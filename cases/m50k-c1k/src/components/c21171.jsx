import React from 'react';
const LABEL_21171 = 'component_21171';
export function Component21171({ value = 21171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21171, 'data-value': derived.doubled }, children);
}
export default Component21171;
