import React from 'react';
const LABEL_2293 = 'component_2293';
export function Component2293({ value = 2293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2293, 'data-value': derived.doubled }, children);
}
export default Component2293;
