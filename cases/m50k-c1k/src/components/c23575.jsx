import React from 'react';
const LABEL_23575 = 'component_23575';
export function Component23575({ value = 23575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23575, 'data-value': derived.doubled }, children);
}
export default Component23575;
