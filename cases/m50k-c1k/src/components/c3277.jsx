import React from 'react';
const LABEL_3277 = 'component_3277';
export function Component3277({ value = 3277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3277, 'data-value': derived.doubled }, children);
}
export default Component3277;
