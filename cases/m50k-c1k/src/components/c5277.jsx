import React from 'react';
const LABEL_5277 = 'component_5277';
export function Component5277({ value = 5277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5277, 'data-value': derived.doubled }, children);
}
export default Component5277;
