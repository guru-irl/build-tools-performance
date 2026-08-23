import React from 'react';
const LABEL_12505 = 'component_12505';
export function Component12505({ value = 12505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12505, 'data-value': derived.doubled }, children);
}
export default Component12505;
