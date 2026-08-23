import React from 'react';
const LABEL_2878 = 'component_2878';
export function Component2878({ value = 2878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2878, 'data-value': derived.doubled }, children);
}
export default Component2878;
