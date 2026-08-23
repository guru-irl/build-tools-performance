import React from 'react';
const LABEL_12573 = 'component_12573';
export function Component12573({ value = 12573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12573, 'data-value': derived.doubled }, children);
}
export default Component12573;
