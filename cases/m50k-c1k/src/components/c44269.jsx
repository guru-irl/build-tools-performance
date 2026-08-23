import React from 'react';
const LABEL_44269 = 'component_44269';
export function Component44269({ value = 44269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44269, 'data-value': derived.doubled }, children);
}
export default Component44269;
