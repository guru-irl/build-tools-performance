import React from 'react';
const LABEL_40206 = 'component_40206';
export function Component40206({ value = 40206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40206, 'data-value': derived.doubled }, children);
}
export default Component40206;
