import React from 'react';
const LABEL_12277 = 'component_12277';
export function Component12277({ value = 12277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12277, 'data-value': derived.doubled }, children);
}
export default Component12277;
