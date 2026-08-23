import React from 'react';
const LABEL_15269 = 'component_15269';
export function Component15269({ value = 15269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15269, 'data-value': derived.doubled }, children);
}
export default Component15269;
