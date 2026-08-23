import React from 'react';
const LABEL_12951 = 'component_12951';
export function Component12951({ value = 12951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12951, 'data-value': derived.doubled }, children);
}
export default Component12951;
