import React from 'react';
const LABEL_14269 = 'component_14269';
export function Component14269({ value = 14269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14269, 'data-value': derived.doubled }, children);
}
export default Component14269;
