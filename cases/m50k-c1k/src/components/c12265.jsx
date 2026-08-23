import React from 'react';
const LABEL_12265 = 'component_12265';
export function Component12265({ value = 12265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12265, 'data-value': derived.doubled }, children);
}
export default Component12265;
