import React from 'react';
const LABEL_19606 = 'component_19606';
export function Component19606({ value = 19606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19606, 'data-value': derived.doubled }, children);
}
export default Component19606;
