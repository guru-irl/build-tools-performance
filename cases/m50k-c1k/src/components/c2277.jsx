import React from 'react';
const LABEL_2277 = 'component_2277';
export function Component2277({ value = 2277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2277, 'data-value': derived.doubled }, children);
}
export default Component2277;
