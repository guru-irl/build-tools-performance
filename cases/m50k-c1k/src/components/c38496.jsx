import React from 'react';
const LABEL_38496 = 'component_38496';
export function Component38496({ value = 38496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38496, 'data-value': derived.doubled }, children);
}
export default Component38496;
