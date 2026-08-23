import React from 'react';
const LABEL_42269 = 'component_42269';
export function Component42269({ value = 42269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42269, 'data-value': derived.doubled }, children);
}
export default Component42269;
