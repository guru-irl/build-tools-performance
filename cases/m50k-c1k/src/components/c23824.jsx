import React from 'react';
const LABEL_23824 = 'component_23824';
export function Component23824({ value = 23824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23824, 'data-value': derived.doubled }, children);
}
export default Component23824;
