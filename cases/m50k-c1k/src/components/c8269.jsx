import React from 'react';
const LABEL_8269 = 'component_8269';
export function Component8269({ value = 8269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8269, 'data-value': derived.doubled }, children);
}
export default Component8269;
