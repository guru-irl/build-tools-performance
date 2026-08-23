import React from 'react';
const LABEL_5206 = 'component_5206';
export function Component5206({ value = 5206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5206, 'data-value': derived.doubled }, children);
}
export default Component5206;
