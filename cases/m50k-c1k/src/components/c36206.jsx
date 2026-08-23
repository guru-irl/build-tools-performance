import React from 'react';
const LABEL_36206 = 'component_36206';
export function Component36206({ value = 36206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36206, 'data-value': derived.doubled }, children);
}
export default Component36206;
