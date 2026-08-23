import React from 'react';
const LABEL_3206 = 'component_3206';
export function Component3206({ value = 3206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3206, 'data-value': derived.doubled }, children);
}
export default Component3206;
