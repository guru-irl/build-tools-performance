import React from 'react';
const LABEL_29493 = 'component_29493';
export function Component29493({ value = 29493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29493, 'data-value': derived.doubled }, children);
}
export default Component29493;
