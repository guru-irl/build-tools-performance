import React from 'react';
const LABEL_15493 = 'component_15493';
export function Component15493({ value = 15493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15493, 'data-value': derived.doubled }, children);
}
export default Component15493;
