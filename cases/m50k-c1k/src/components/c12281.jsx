import React from 'react';
const LABEL_12281 = 'component_12281';
export function Component12281({ value = 12281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12281, 'data-value': derived.doubled }, children);
}
export default Component12281;
