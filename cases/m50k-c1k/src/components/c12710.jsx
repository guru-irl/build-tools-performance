import React from 'react';
const LABEL_12710 = 'component_12710';
export function Component12710({ value = 12710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12710, 'data-value': derived.doubled }, children);
}
export default Component12710;
