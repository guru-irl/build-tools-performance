import React from 'react';
const LABEL_2274 = 'component_2274';
export function Component2274({ value = 2274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2274, 'data-value': derived.doubled }, children);
}
export default Component2274;
