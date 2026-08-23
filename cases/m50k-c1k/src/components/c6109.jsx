import React from 'react';
const LABEL_6109 = 'component_6109';
export function Component6109({ value = 6109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6109, 'data-value': derived.doubled }, children);
}
export default Component6109;
