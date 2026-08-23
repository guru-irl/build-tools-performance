import React from 'react';
const LABEL_18269 = 'component_18269';
export function Component18269({ value = 18269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18269, 'data-value': derived.doubled }, children);
}
export default Component18269;
