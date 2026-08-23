import React from 'react';
const LABEL_16269 = 'component_16269';
export function Component16269({ value = 16269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16269, 'data-value': derived.doubled }, children);
}
export default Component16269;
