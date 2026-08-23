import React from 'react';
const LABEL_21179 = 'component_21179';
export function Component21179({ value = 21179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21179, 'data-value': derived.doubled }, children);
}
export default Component21179;
