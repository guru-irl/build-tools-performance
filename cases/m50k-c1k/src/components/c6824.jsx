import React from 'react';
const LABEL_6824 = 'component_6824';
export function Component6824({ value = 6824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6824, 'data-value': derived.doubled }, children);
}
export default Component6824;
