import React from 'react';
const LABEL_36493 = 'component_36493';
export function Component36493({ value = 36493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36493, 'data-value': derived.doubled }, children);
}
export default Component36493;
