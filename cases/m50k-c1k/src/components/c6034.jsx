import React from 'react';
const LABEL_6034 = 'component_6034';
export function Component6034({ value = 6034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6034, 'data-value': derived.doubled }, children);
}
export default Component6034;
