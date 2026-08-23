import React from 'react';
const LABEL_35269 = 'component_35269';
export function Component35269({ value = 35269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35269, 'data-value': derived.doubled }, children);
}
export default Component35269;
