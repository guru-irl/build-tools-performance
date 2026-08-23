import React from 'react';
const LABEL_2262 = 'component_2262';
export function Component2262({ value = 2262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2262, 'data-value': derived.doubled }, children);
}
export default Component2262;
