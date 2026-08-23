import React from 'react';
const LABEL_7269 = 'component_7269';
export function Component7269({ value = 7269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7269, 'data-value': derived.doubled }, children);
}
export default Component7269;
