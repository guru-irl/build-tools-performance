import React from 'react';
const LABEL_34206 = 'component_34206';
export function Component34206({ value = 34206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34206, 'data-value': derived.doubled }, children);
}
export default Component34206;
