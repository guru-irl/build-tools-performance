import React from 'react';
const LABEL_2306 = 'component_2306';
export function Component2306({ value = 2306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2306, 'data-value': derived.doubled }, children);
}
export default Component2306;
