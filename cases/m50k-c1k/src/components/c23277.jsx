import React from 'react';
const LABEL_23277 = 'component_23277';
export function Component23277({ value = 23277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23277, 'data-value': derived.doubled }, children);
}
export default Component23277;
